#!/usr/bin/env python3
"""
=============================================================================
  Preaumate  —  i18n Translation Manager
  tools/i18n_tools.py
=============================================================================

  What this script does
  ─────────────────────
  It manages all website translations so you never have to hand-edit the
  big i18n.js file again. Everything goes through one JSON file that is
  easy to edit, and this script handles the rest.

  Available commands
  ──────────────────
  python i18n_tools.py import       Read existing i18n.js → translations.json
                                    (run this ONCE the first time)

  python i18n_tools.py check        Show which translations are missing
                                    per language

  python i18n_tools.py translate    Auto-fill missing translations using
                                    Google Translate (free, no account needed)

  python i18n_tools.py build        Write a new src/lib/i18n.js from
                                    translations.json

  python i18n_tools.py validate     Find any [PLACEHOLDER] text you forgot
                                    to fill in before going live

  python i18n_tools.py add-key      Interactive: add one new key to every
                                    language at once

  Typical daily workflow
  ──────────────────────
  1. Add your new text in English inside translations.json
  2. python i18n_tools.py translate   ← fills in the other 5 languages
  3. python i18n_tools.py build       ← writes the new i18n.js
  4. npm run dev                      ← test in browser
  5. npm run build && deploy          ← go live

=============================================================================
"""

import json
import os
import re
import shutil
import sys
import time
import argparse
from pathlib import Path


# =============================================================================
#  CONFIGURATION
#  ─────────────────────────────────────────────────────────────────────────────
#  These paths tell the script where your files live.
#  The script itself lives in  your-project/tools/i18n_tools.py
#  Adjust only if you have moved files to a different location.
# =============================================================================

# Where THIS script file lives  (your-project/tools/)
TOOLS_DIR = Path(__file__).parent.resolve()

# The project root  (your-project/)
PROJECT_ROOT = TOOLS_DIR.parent

# The JSON file that becomes your single source of truth for all translations.
# You will edit THIS file from now on, not i18n.js directly.
TRANSLATIONS_JSON = TOOLS_DIR / "translations.json"

# The JavaScript file your React website actually reads.
# 'build' generates this from translations.json.
I18N_JS = PROJECT_ROOT / "src" / "lib" / "i18n.js"

# All six languages the site supports
LANGUAGES = ["en", "nl", "es", "de", "fr", "pt"]

# Human-readable names shown in terminal output
LANGUAGE_NAMES = {
    "en": "English     🇬🇧",
    "nl": "Nederlands  🇳🇱",
    "es": "Español     🇪🇸",
    "de": "Deutsch     🇩🇪",
    "fr": "Français    🇫🇷",
    "pt": "Português   🇵🇹",
}

# Google Translate uses these codes
# Full list: https://cloud.google.com/translate/docs/languages
GOOGLE_LANG_CODES = {"nl": "nl", "es": "es", "de": "de", "fr": "fr", "pt": "pt"}

# Keys whose values must NEVER be auto-translated.
# These are personal info fields, URLs, and technical identifiers.
NO_TRANSLATE_KEYS = {
    "linkedin", "photoUrl", "href", "email", "phone",
    "flag", "code", "label", "slug",
}

# String patterns that look like technical brand names or URLs — skip them.
# For example "Siemens TIA Portal" does not need a Dutch translation.
SKIP_PATTERNS = [
    re.compile(r"^(Siemens|Rockwell|CoDeSys|WinCC|FactoryTalk)"),
    re.compile(r"^(OPC UA|MQTT|Modbus|Profinet|EtherNet|Node-RED)"),
    re.compile(r"^(Python|SQL|REST API|Edge Gate)"),
    re.compile(r"^https?://"),           # URLs
    re.compile(r"^#$"),                  # anchor placeholders
    re.compile(r"^[\w.+-]+@[\w.-]+\.\w{2,}$"),  # email addresses
]


# =============================================================================
#  DATA  —  load and save translations.json
# =============================================================================

def load_translations() -> dict:
    """
    Load translations.json from disk and return it as a Python dictionary.

    A dictionary is like a labelled filing cabinet:
        data["en"]["hero"]["title"] gives you the English hero title.
    """
    if not TRANSLATIONS_JSON.exists():
        _die(
            f"translations.json not found at: {TRANSLATIONS_JSON}\n"
            "  Run 'python i18n_tools.py import' first to create it."
        )
    with open(TRANSLATIONS_JSON, "r", encoding="utf-8") as fh:
        return json.load(fh)


def save_translations(data: dict) -> None:
    """Write translations.json back to disk, nicely formatted."""
    with open(TRANSLATIONS_JSON, "w", encoding="utf-8") as fh:
        json.dump(data, fh, ensure_ascii=False, indent=2)
    _ok(f"translations.json saved  ({TRANSLATIONS_JSON})")


# =============================================================================
#  PATH HELPERS
#  ─────────────────────────────────────────────────────────────────────────────
#  "Dot-notation" means writing nested keys as a string:
#      "hero.trustBadges.0"  instead of  data["hero"]["trustBadges"][0]
#  We use this throughout to report which exact translation is missing.
# =============================================================================

def get_all_leaf_paths(obj, prefix: str = "") -> list:
    """
    Walk an entire nested dict/list and return every path that leads to an
    actual value (string, number, etc.) — not to another dict or list.

    Example output for the 'hero' section:
        ["hero.title", "hero.subtitle", "hero.cta", "hero.trustBadges.0", ...]
    """
    paths = []
    if isinstance(obj, dict):
        for key, val in obj.items():
            child_path = f"{prefix}.{key}" if prefix else key
            paths.extend(get_all_leaf_paths(val, child_path))
    elif isinstance(obj, list):
        for i, val in enumerate(obj):
            child_path = f"{prefix}.{i}" if prefix else str(i)
            paths.extend(get_all_leaf_paths(val, child_path))
    else:
        paths.append(prefix)
    return paths


def get_by_path(data: dict, path: str):
    """
    Read a value from a nested dict using dot-notation.
        get_by_path(data, "hero.title")  →  data["hero"]["title"]
    Returns None if the path does not exist.
    """
    parts = path.split(".")
    node = data
    try:
        for part in parts:
            node = node[int(part)] if isinstance(node, list) else node[part]
        return node
    except (KeyError, IndexError, TypeError):
        return None


def set_by_path(data: dict, path: str, value) -> None:
    """
    Write a value into a nested dict using dot-notation.
    Creates intermediate dicts automatically.
        set_by_path(data, "hero.title", "New Title")
    """
    parts = path.split(".")
    node = data
    for part in parts[:-1]:
        if isinstance(node, list):
            node = node[int(part)]
        else:
            # Create the key if it doesn't exist yet
            if part not in node:
                node[part] = {}
            node = node[part]

    last = parts[-1]
    if isinstance(node, list):
        node[int(last)] = value
    else:
        node[last] = value


# =============================================================================
#  TRANSLATION ENGINE
#  ─────────────────────────────────────────────────────────────────────────────
#  Uses the free 'deep_translator' library.
#  No account, no API key — just internet access.
# =============================================================================

def _should_skip(key_path: str, value) -> bool:
    """
    Decide whether a value should be left as-is (not translated).
    Returns True  →  skip
    Returns False →  go ahead and translate
    """
    if not isinstance(value, str):
        return True  # numbers, booleans — nothing to translate

    # Skip by the key's own name (linkedin, photoUrl, etc.)
    leaf_key = key_path.split(".")[-1] if "." in key_path else key_path
    if leaf_key in NO_TRANSLATE_KEYS:
        return True

    # Skip placeholder text — these need human input
    stripped = value.strip()
    if stripped.startswith("[") and stripped.endswith("]"):
        return True

    # Skip empty strings
    if not stripped:
        return True

    # Skip technical brand names and URLs
    for pattern in SKIP_PATTERNS:
        if pattern.search(value):
            return True

    return False


def translate_one(text: str, target_lang: str) -> str:
    """
    Translate a single string from English to target_lang.
    Falls back to the original text if anything goes wrong.
    """
    try:
        from deep_translator import GoogleTranslator
    except ImportError:
        _die(
            "deep_translator is not installed.\n"
            "  Run:  pip install deep-translator"
        )

    lang_code = GOOGLE_LANG_CODES.get(target_lang, target_lang)
    try:
        result = GoogleTranslator(source="en", target=lang_code).translate(text)
        time.sleep(0.2)          # Small pause — be polite to the free API
        return result if result else text
    except Exception as exc:
        _warn(f"Translation failed for '{text[:40]}…': {exc}")
        return text              # Return original rather than crashing


def translate_tree(en_node, target_node, lang: str, path: str = ""):
    """
    Recursively compare the English data tree against the target language tree.
    For every leaf value that is missing or empty in the target, translate it.

    This handles:
      • Plain strings
      • Arrays of strings  (e.g. trustBadges)
      • Arrays of objects  (e.g. services.items[].bullets)
      • Deeply nested dicts
    """
    # ── Plain string ──────────────────────────────────────────────────────────
    if isinstance(en_node, str):
        if _should_skip(path, en_node):
            # Return existing target value unchanged (or EN value if missing)
            return target_node if (target_node is not None) else en_node

        # If the target is missing OR identical to EN, translate
        if target_node is None or target_node == en_node:
            translated = translate_one(en_node, lang)
            en_preview  = en_node[:45] + "…"  if len(en_node) > 45  else en_node
            tr_preview  = translated[:45] + "…" if len(translated) > 45 else translated
            print(f"      ✓  {path}")
            print(f"         EN: {en_preview}")
            print(f"         {lang.upper()}: {tr_preview}")
            return translated

        return target_node      # Already has a value — keep it

    # ── List ──────────────────────────────────────────────────────────────────
    elif isinstance(en_node, list):
        result = list(target_node) if isinstance(target_node, list) else []
        for i, en_item in enumerate(en_node):
            item_path = f"{path}.{i}" if path else str(i)
            if i < len(result):
                result[i] = translate_tree(en_item, result[i], lang, item_path)
            else:
                result.append(translate_tree(en_item, None, lang, item_path))
        return result

    # ── Dict ──────────────────────────────────────────────────────────────────
    elif isinstance(en_node, dict):
        result = dict(target_node) if isinstance(target_node, dict) else {}
        for key, en_val in en_node.items():
            child_path = f"{path}.{key}" if path else key
            result[key] = translate_tree(en_val, result.get(key), lang, child_path)
        return result

    # ── Anything else (numbers, booleans) ────────────────────────────────────
    return en_node


# =============================================================================
#  IMPORT COMMAND  —  i18n.js  →  translations.json
# =============================================================================

def cmd_import() -> None:
    """
    Parse your existing i18n.js and create translations.json from it.
    Run this ONCE. After that, edit translations.json directly.
    """
    _section("IMPORT  —  converting i18n.js → translations.json")

    if not I18N_JS.exists():
        _die(
            f"i18n.js not found at:\n  {I18N_JS}\n\n"
            "  Check that your project folder structure matches:\n"
            "    your-project/\n"
            "      src/lib/i18n.js    ← must exist\n"
            "      tools/i18n_tools.py\n\n"
            "  If your file is somewhere else, update the I18N_JS path\n"
            "  at the top of this script."
        )

    print(f"  Reading: {I18N_JS}")
    raw = I18N_JS.read_text(encoding="utf-8")

    # ── Step 1: pull out just the translations = { ... } object ─────────────
    match = re.search(
        r"export\s+const\s+translations\s*=\s*(\{.*\})\s*;?\s*$",
        raw,
        re.DOTALL,
    )
    if not match:
        _die(
            "Could not find 'export const translations = {...}' in i18n.js.\n"
            "  The file may have been renamed or its format changed."
        )

    js_obj = match.group(1)

    # ── Step 2: strip JS comments so the parser doesn't choke ───────────────
    js_obj = re.sub(r"//[^\n]*", "", js_obj)           # single-line //
    js_obj = re.sub(r"/\*.*?\*/", "", js_obj, flags=re.DOTALL)  # /* block */

    # ── Step 3: parse with demjson3 (handles JS object notation / JSON5) ────
    print("  Parsing JavaScript object notation…")
    try:
        import demjson3
    except ImportError:
        _die(
            "demjson3 is not installed.\n"
            "  Run:  pip install demjson3"
        )

    try:
        data = demjson3.decode(js_obj)
    except Exception as exc:
        _die(
            f"Parsing failed: {exc}\n\n"
            "  This can happen if i18n.js contains template literals\n"
            "  (backtick strings like `hello ${name}`).\n"
            "  Check the file for unusual JavaScript syntax."
        )

    # ── Step 4: backup and save ──────────────────────────────────────────────
    _backup(TRANSLATIONS_JSON)
    save_translations(data)

    langs_found = list(data.keys())
    en_count    = len(get_all_leaf_paths(data.get("en", {})))
    print()
    _ok(f"Import complete!")
    print(f"  Languages found : {langs_found}")
    print(f"  Keys in English : {en_count}")
    print()
    print("  Next steps:")
    print("    python i18n_tools.py check       ← see what is missing")
    print("    python i18n_tools.py translate   ← fill in the gaps")


# =============================================================================
#  CHECK COMMAND  —  show missing keys per language
# =============================================================================

def cmd_check() -> None:
    """
    Compare every language against English and report what is missing.
    Nothing is changed — this command is read-only.
    """
    _section("CHECK  —  translation completeness")
    data    = load_translations()
    en_data = data.get("en")

    if not en_data:
        _die("No English ('en') block found in translations.json.")

    en_paths = set(get_all_leaf_paths(en_data))
    print(f"  Reference: {LANGUAGE_NAMES['en']}  ({len(en_paths)} keys)\n")

    all_complete = True

    for lang in [l for l in LANGUAGES if l != "en"]:
        lang_data  = data.get(lang, {})
        lang_paths = set(get_all_leaf_paths(lang_data))
        missing    = sorted(en_paths - lang_paths)
        extra      = sorted(lang_paths - en_paths)

        print(f"  {LANGUAGE_NAMES[lang]}")

        if not missing and not extra:
            print(f"  ✅  {len(lang_paths)} / {len(en_paths)} keys — complete\n")
            continue

        all_complete = False
        print(f"  ⚠   {len(lang_paths)} / {len(en_paths)} keys present")

        if missing:
            print(f"  ✗   {len(missing)} missing key(s):")
            for path in missing[:25]:
                en_val = get_by_path(en_data, path)
                preview = str(en_val)
                if len(preview) > 55:
                    preview = preview[:55] + "…"
                print(f"      • {path}")
                print(f"          EN value: {preview}")
            if len(missing) > 25:
                print(f"      … and {len(missing) - 25} more")

        if extra:
            print(f"  ℹ   {len(extra)} key(s) present here but not in English (probably fine):")
            for path in extra[:3]:
                print(f"      • {path}")
            if len(extra) > 3:
                print(f"      … and {len(extra) - 3} more")

        print()

    if all_complete:
        _ok("All languages are complete — nothing missing!")
    else:
        print("  💡  Run 'python i18n_tools.py translate' to fill in the gaps automatically.")


# =============================================================================
#  TRANSLATE COMMAND  —  auto-fill missing translations
# =============================================================================

def cmd_translate(lang_filter: str = None, force: bool = False) -> None:
    """
    Walk every language, find keys that are missing compared to English,
    and translate them using Google Translate (free, no account needed).

    --lang nl   Process only Dutch
    --force     Re-translate everything, not just missing keys
                (useful after you update English text)
    """
    _section("TRANSLATE  —  auto-fill via Google Translate")
    print("  Free tier · No API key required · Technical terms are skipped\n")

    data    = load_translations()
    en_data = data.get("en")
    if not en_data:
        _die("No English ('en') block found in translations.json.")

    langs = [lang_filter] if lang_filter else [l for l in LANGUAGES if l != "en"]

    # Validate --lang value
    if lang_filter and lang_filter not in GOOGLE_LANG_CODES:
        _die(
            f"'{lang_filter}' is not a supported language code.\n"
            f"  Supported: {list(GOOGLE_LANG_CODES.keys())}"
        )

    for lang in langs:
        print(f"  ── {LANGUAGE_NAMES.get(lang, lang)} {'─' * 35}")
        existing = data.get(lang, {})

        if force:
            print("  (force mode: re-translating everything)\n")
            updated = translate_tree(en_data, {}, lang)
        else:
            missing_count = len(
                set(get_all_leaf_paths(en_data)) - set(get_all_leaf_paths(existing))
            )
            if missing_count == 0:
                print("  ✅  Nothing missing — skipping.\n")
                continue
            print(f"  Filling in {missing_count} missing key(s)…\n")
            updated = translate_tree(en_data, existing, lang)

        data[lang] = updated
        print(f"\n  ✅  {LANGUAGE_NAMES.get(lang, lang)} done.\n")

    save_translations(data)
    print()
    _ok("Translation complete!")
    print("  Now run:  python i18n_tools.py build")
    print("  …to update your website's i18n.js file.\n")


# =============================================================================
#  BUILD COMMAND  —  translations.json  →  i18n.js
# =============================================================================

def cmd_build() -> None:
    """
    Generate a new src/lib/i18n.js from translations.json.
    The old i18n.js is backed up automatically before overwriting.
    """
    _section("BUILD  —  writing src/lib/i18n.js")
    data = load_translations()

    # ── Fixed header block ───────────────────────────────────────────────────
    header = """\
export const languages = [
  { code: "en", label: "English",    flag: "\U0001f1ec\U0001f1e7" },
  { code: "nl", label: "Nederlands", flag: "\U0001f1f3\U0001f1f1" },
  { code: "es", label: "Español",    flag: "\U0001f1ea\U0001f1f8" },
  { code: "de", label: "Deutsch",    flag: "\U0001f1e9\U0001f1ea" },
  { code: "fr", label: "Français",   flag: "\U0001f1eb\U0001f1f7" },
  { code: "pt", label: "Português",  flag: "\U0001f1f5\U0001f1f9" },
];\n"""

    # ── Serialise translations to JSON (valid JS syntax) ─────────────────────
    translations_str = json.dumps(data, ensure_ascii=False, indent=2)

    output = (
        header
        + "\n"
        + "// =================================================================\n"
        + "// AUTO-GENERATED by tools/i18n_tools.py\n"
        + "// Edit tools/translations.json, then run:\n"
        + "//   python tools/i18n_tools.py build\n"
        + "// =================================================================\n"
        + "\n"
        + f"export const translations = {translations_str};\n"
    )

    _backup(I18N_JS)
    I18N_JS.parent.mkdir(parents=True, exist_ok=True)
    I18N_JS.write_text(output, encoding="utf-8")

    lines = output.count("\n")
    _ok(f"Written {lines:,} lines to {I18N_JS}")
    print("  Your website's i18n.js is up to date.\n")


# =============================================================================
#  VALIDATE COMMAND  —  find unfilled [PLACEHOLDER] text
# =============================================================================

def cmd_validate() -> None:
    """
    Scan every language for values that still contain [PLACEHOLDER] text.
    Run this before going live to make sure nothing is missing.
    """
    _section("VALIDATE  —  checking for unfilled placeholders")
    data  = load_translations()
    total = 0

    for lang in LANGUAGES:
        lang_data    = data.get(lang, {})
        placeholders = []

        for path in get_all_leaf_paths(lang_data):
            val = get_by_path(lang_data, path)
            if isinstance(val, str):
                stripped = val.strip()
                if stripped.startswith("[") and stripped.endswith("]"):
                    placeholders.append((path, val))

        if placeholders:
            total += len(placeholders)
            print(f"  {LANGUAGE_NAMES.get(lang, lang)}  —  {len(placeholders)} unfilled:")
            for path, val in placeholders:
                preview = val[:70] + "…" if len(val) > 70 else val
                print(f"    • {path}")
                print(f"      → {preview}")
            print()

    if total == 0:
        _ok("No placeholders found — all translations are filled in!")
    else:
        print(f"  {total} placeholder(s) need human input.")
        print("  Most are in: founders.founders.* and projectProof.projects.*.summary")
        print("  Fill them in translations.json, then run: python i18n_tools.py build\n")


# =============================================================================
#  ADD-KEY COMMAND  —  add a new key interactively
# =============================================================================

def cmd_add_key() -> None:
    """
    Interactive helper to add one new translation key across all languages.

    You type the key path and the English text.
    The script translates it to the other 5 languages and saves everything.

    Example session:
      Key path  : nav.pricing
      English   : Pricing
      → nl: Prijzen  de: Preise  es: Precios  fr: Tarifs  pt: Preços
    """
    _section("ADD KEY  —  add a new translation to all languages")
    data = load_translations()

    path = input("  Key path (dot notation, e.g. 'hero.newButton'): ").strip()
    if not path:
        print("  Cancelled.")
        return

    en_value = input("  English value: ").strip()
    if not en_value:
        print("  Cancelled.")
        return

    # Check for existing value
    existing_en = get_by_path(data.get("en", {}), path)
    if existing_en is not None:
        _warn(f"Key '{path}' already exists with value: {existing_en}")
        answer = input("  Overwrite? (y/n): ").strip().lower()
        if answer != "y":
            print("  Cancelled.")
            return

    # Set English
    en_block = data.get("en", {})
    set_by_path(en_block, path, en_value)
    data["en"] = en_block

    print(f"\n  Translating to {len(LANGUAGES) - 1} languages…\n")

    for lang in [l for l in LANGUAGES if l != "en"]:
        if lang not in GOOGLE_LANG_CODES:
            continue
        if _should_skip(path, en_value):
            translated = en_value
            print(f"  {lang.upper()}: {translated}  (kept as-is — technical term)")
        else:
            translated = translate_one(en_value, lang)
            print(f"  {lang.upper()}: {translated}")

        lang_block = data.get(lang, {})
        set_by_path(lang_block, path, translated)
        data[lang] = lang_block

    save_translations(data)
    print()
    _ok(f"Key '{path}' added to all languages.")
    print("  Run 'python i18n_tools.py build' to update i18n.js\n")


# =============================================================================
#  SMALL TERMINAL OUTPUT HELPERS
# =============================================================================

def _section(title: str) -> None:
    width = 60
    print()
    print("=" * width)
    print(f"  {title}")
    print("=" * width)

def _ok(msg: str) -> None:
    print(f"  ✅  {msg}")

def _warn(msg: str) -> None:
    print(f"  ⚠   {msg}")

def _die(msg: str) -> None:
    print(f"\n  ❌  ERROR\n  {msg}\n", file=sys.stderr)
    sys.exit(1)

def _backup(path: Path) -> None:
    """If a file already exists, copy it to .bak before overwriting."""
    if path.exists():
        backup = path.with_suffix(path.suffix + ".bak")
        shutil.copy(path, backup)
        print(f"  ℹ   Backed up: {path.name} → {path.name}.bak")


# =============================================================================
#  MAIN  —  command-line argument handling
# =============================================================================

def main() -> None:
    parser = argparse.ArgumentParser(
        prog="i18n_tools",
        description="Preaumate Translation Manager",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""\
Commands
  import      Convert existing i18n.js → translations.json  (run once)
  check       Show missing translations per language
  translate   Auto-fill missing translations (free Google Translate)
  build       Write src/lib/i18n.js from translations.json
  validate    Find unfilled [PLACEHOLDER] text
  add-key     Add a new key to all languages interactively

Options for 'translate'
  --lang nl   Only process one language (nl / es / de / fr / pt)
  --force     Re-translate ALL keys, not just missing ones

Examples
  python i18n_tools.py import
  python i18n_tools.py check
  python i18n_tools.py translate
  python i18n_tools.py translate --lang nl
  python i18n_tools.py translate --force
  python i18n_tools.py build
  python i18n_tools.py validate
  python i18n_tools.py add-key
""",
    )

    parser.add_argument(
        "command",
        choices=["import", "check", "translate", "build", "validate", "add-key"],
    )
    parser.add_argument(
        "--lang",
        metavar="CODE",
        help="Language code to process (nl/es/de/fr/pt). Only used with 'translate'.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-translate ALL values, not just missing ones. Used with 'translate'.",
    )

    args = parser.parse_args()

    print()
    print("╔══════════════════════════════════════════════════════════╗")
    print("║          Preaumate  i18n Translation Manager             ║")
    print("╚══════════════════════════════════════════════════════════╝")

    if args.command == "import":
        cmd_import()
    elif args.command == "check":
        cmd_check()
    elif args.command == "translate":
        cmd_translate(lang_filter=args.lang, force=args.force)
    elif args.command == "build":
        cmd_build()
    elif args.command == "validate":
        cmd_validate()
    elif args.command == "add-key":
        cmd_add_key()


if __name__ == "__main__":
    main()
