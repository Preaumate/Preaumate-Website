# Preaumate i18n Tools — Practical Manual

> **Who this is for:** Someone with beginner Python knowledge who wants to
> manage website translations without hand-editing a 3,000-line JavaScript
> file.
>
> **Plain-language promise:** Every technical term in this manual is explained
> the first time it appears.

---

## What does this tool actually do?

Your website currently stores all its text in one big file called `i18n.js`.
That file has text in 6 languages and is about 3,000 lines long. Editing it
by hand is slow, error-prone, and frustrating.

This tool replaces that workflow:

```
BEFORE:  You hand-edit i18n.js (3,000 lines, easy to break)

AFTER:   You edit translations.json (clean, organised)
         You run one command
         The tool writes a perfect i18n.js automatically
```

The tool also automatically translates your English text into the other
5 languages using Google Translate — for free, with no account required.

---

## Concepts explained simply

| Term | What it means in plain language |
|------|--------------------------------|
| **Terminal** | A text window where you type commands. On Mac it is called "Terminal". On Windows it is called "Command Prompt" or "PowerShell". |
| **Python** | A programming language. You need it installed to run this tool. |
| **pip** | Python's package installer. Works like an app store for Python tools. |
| **package** | A ready-made tool someone else wrote that you can install and use. |
| **path** | The address of a file on your computer, e.g. `C:\Users\You\project\src\lib\i18n.js` |
| **JSON** | A simple data format that looks like `{ "key": "value" }`. Easy to read and edit. |
| **dot notation** | A way to describe nested keys: `hero.title` means `data["hero"]["title"]` |
| **import** (this tool's command) | Read the existing i18n.js once and convert it to translations.json |
| **build** (this tool's command) | Generate a new i18n.js from translations.json |

---

## Part 1 — One-time setup

You do these steps **once**. After that, skip straight to Part 2.

---

### Step 1 — Check that Python is installed

Open your terminal and type:

```
python --version
```

You should see something like `Python 3.11.4`.

If you see an error, download Python from **https://www.python.org/downloads/**
and run the installer. During installation, tick the box that says
**"Add Python to PATH"** — this is important.

After installing, close and reopen your terminal, then try again.

---

### Step 2 — Place the tool files in your project

Your project folder should look like this after you add the files:

```
your-project/               ← the root of your website project
│
├── src/
│   └── lib/
│       └── i18n.js         ← your existing translations file
│
├── tools/                  ← CREATE this folder if it does not exist
│   ├── i18n_tools.py       ← the main script  (copy here)
│   ├── requirements.txt    ← the package list  (copy here)
│   └── translations.json   ← will be created in Step 4
│
└── package.json
```

**How to create the `tools` folder:**
Open your terminal, navigate to your project, and type:
```
mkdir tools
```

Then copy `i18n_tools.py` and `requirements.txt` into that folder.

---

### Step 3 — Install the required packages

In your terminal, navigate into the `tools` folder:

```
cd tools
```

> `cd` means "change directory" — it moves you into a folder.

Then install the packages:

```
pip install -r requirements.txt
```

> `pip install -r requirements.txt` means:
> "Install every package listed in the requirements.txt file."

You will see some text scroll past as packages download. When it finishes,
you are ready.

**If `pip` is not found**, try `pip3` instead:
```
pip3 install -r requirements.txt
```

---

### Step 4 — Import your existing translations (run ONCE)

This step reads your current `i18n.js` and converts it to `translations.json`.
You only do this once.

Make sure you are in the `tools` folder, then run:

```
python i18n_tools.py import
```

You will see output like:

```
╔══════════════════════════════════════════════════════════╗
║          Preaumate  i18n Translation Manager             ║
╚══════════════════════════════════════════════════════════╝

======================================
  IMPORT  —  converting i18n.js → translations.json
======================================
  Reading: /your-project/src/lib/i18n.js
  Parsing JavaScript object notation…
  ✅  translations.json saved

  Languages found : ['en', 'nl', 'es', 'de', 'fr', 'pt']
  Keys in English : 312
```

A file called `translations.json` will now appear in your `tools` folder.

> **What just happened?** The script read the JavaScript file, converted it
> into a format Python can work with, and saved it as clean JSON.

---

### Step 5 — Check what is missing

```
python i18n_tools.py check
```

This shows you which translation keys are missing in each language.
Nothing is changed — it is read-only.

---

### Step 6 — Auto-translate what is missing

```
python i18n_tools.py translate
```

The tool connects to Google Translate, fills in every missing translation,
and saves the result back to `translations.json`.

This takes about 1–2 minutes because it pauses briefly between requests
to stay within the free usage limits.

---

### Step 7 — Build the new i18n.js

```
python i18n_tools.py build
```

The tool reads `translations.json` and writes a new `src/lib/i18n.js`.
Your old file is automatically backed up as `i18n.js.bak` before anything
is overwritten.

---

### Step 8 — Test in your browser

```
cd ..
npm run dev
```

Open `http://localhost:5173` and check that the website still looks correct.

---

## Part 2 — Daily workflow

Every time you add new text or change existing translations:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  1. Open tools/translations.json                        │
│     Add or change your text in the "en" section         │
│                                                         │
│  2. python i18n_tools.py translate                      │
│     Fills in the other 5 languages automatically        │
│                                                         │
│  3. python i18n_tools.py validate                       │
│     Check nothing is missing before going live          │
│                                                         │
│  4. python i18n_tools.py build                          │
│     Generates the new i18n.js                           │
│                                                         │
│  5. npm run dev  (test)  or  npm run build  (deploy)    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Part 3 — All commands reference

### `import` — run once to bootstrap
```
python i18n_tools.py import
```
Reads `src/lib/i18n.js` and creates `translations.json`.
Run this only once at the start. After that, `translations.json` is
your source of truth.

---

### `check` — see what is missing
```
python i18n_tools.py check
```
Compares every language against English and lists missing keys.
Read-only — nothing is changed.

---

### `translate` — auto-fill missing translations
```
python i18n_tools.py translate
```
Fills in everything that is missing using Google Translate.

**Translate only one language** (faster if you just added content):
```
python i18n_tools.py translate --lang nl
python i18n_tools.py translate --lang es
```

**Re-translate everything** (use this after you rewrite English text):
```
python i18n_tools.py translate --force
```
> ⚠ `--force` overwrites ALL existing non-English translations. Only use
> this if you have substantially rewritten your English content.

---

### `build` — generate i18n.js
```
python i18n_tools.py build
```
Writes a new `src/lib/i18n.js` from `translations.json`.
Always backs up the old file as `i18n.js.bak` first.

---

### `validate` — check before going live
```
python i18n_tools.py validate
```
Scans all translations for `[PLACEHOLDER]` text that still needs
human input. Run this before every deployment.

---

### `add-key` — add one new key interactively
```
python i18n_tools.py add-key
```
Interactive session — you type the key path and the English text,
and the tool translates it to all 5 other languages for you.

Example:
```
  Key path (dot notation, e.g. 'hero.newButton'): nav.pricing
  English value: Pricing

  Translating to 5 languages…
  NL: Prijzen
  ES: Precios
  DE: Preise
  FR: Tarifs
  PT: Preços

  ✅  Key 'nav.pricing' added to all languages.
  Run 'python i18n_tools.py build' to update i18n.js
```

---

## Part 4 — Editing translations.json

### Where to find the file
```
your-project/
  tools/
    translations.json   ← edit this
```

### Structure
The file looks like this (shortened):
```json
{
  "en": {
    "hero": {
      "title": "Industrial Automation Experts",
      "subtitle": "Preaumate helps manufacturers…",
      "cta": "Talk to an Engineer",
      "trustBadges": [
        "30+ years combined experience",
        "Europe & Latin America"
      ]
    },
    "services": {
      "title": "Industrial Automation Services"
    }
  },
  "nl": {
    "hero": {
      "title": "Industriële Automatisering Experts",
      ...
    }
  }
}
```

### How to add a new section
1. Add all the keys under `"en"` first
2. Save the file
3. Run `python i18n_tools.py translate` — it will fill in all other languages

### Rules to avoid breaking the file
- Always close every `{` with a `}` and every `[` with a `]`
- Always put commas between items — but NOT after the last item in a block
- Always wrap text values in double quotes: `"like this"`
- Never use single quotes: `'like this'` ← wrong in JSON

**Tip:** Use a code editor like VS Code — it highlights JSON errors in red
before you even save.

---

## Part 5 — The founders and project content

The `founders` and `projectProof` sections contain placeholders:

```json
"name": "[YOUR FULL NAME]",
"bio":  "[2-3 sentences about your background]"
```

The `translate` command **will not touch these** — they start with `[` so
the tool knows they need human input. Fill them in manually in
`translations.json`, then run `build`.

You only need to fill them in **once in English**. The other languages
will be auto-translated when you run `translate`.

---

## Part 6 — Troubleshooting

### "python is not recognised"
→ Python is not installed or not on your PATH.
  Download from python.org and make sure to tick "Add to PATH" during install.
  Then close and reopen your terminal.

### "pip is not recognised"
→ Try `pip3` instead of `pip`.
  Or try `python -m pip install -r requirements.txt`

### "ModuleNotFoundError: No module named 'deep_translator'"
→ The packages are not installed yet.
  Run: `pip install -r requirements.txt`

### "Request exception" during translate
→ No internet connection, or Google Translate temporarily rate-limited you.
  Wait 30 seconds and try again.
  If one language fails, use `--lang` to retry just that one:
  `python i18n_tools.py translate --lang nl`

### "Could not find export const translations in i18n.js"
→ The file may have been renamed, moved, or the format changed.
  Check that `src/lib/i18n.js` exists and still has the line
  `export const translations = {`

### "Parsing failed"
→ The i18n.js file may contain template literals (backtick strings).
  Check for lines like:  const x = \`hello ${name}\`
  These are not in translation files normally — contact support if needed.

### The website looks wrong after build
→ The `.bak` backup was created automatically.
  To restore: rename `i18n.js.bak` → `i18n.js`
  Then check what changed in `translations.json`

---

## Part 7 — Quick reference card

Print this out and keep it by your desk.

```
┌──────────────────────────────────────────────────────────┐
│           Preaumate i18n Tools — Quick Reference         │
├──────────────────────────────────────────────────────────┤
│  Navigate to tools folder:  cd your-project/tools        │
├──────────────────────────────────────────────────────────┤
│  FIRST TIME ONLY                                         │
│    pip install -r requirements.txt                       │
│    python i18n_tools.py import                           │
├──────────────────────────────────────────────────────────┤
│  EVERY TIME YOU ADD/CHANGE TEXT                          │
│    1. Edit translations.json  (add text in "en" section) │
│    2. python i18n_tools.py translate                     │
│    3. python i18n_tools.py validate                      │
│    4. python i18n_tools.py build                         │
│    5. npm run dev  (check browser)                       │
├──────────────────────────────────────────────────────────┤
│  OTHER USEFUL COMMANDS                                   │
│    python i18n_tools.py check             (see missing)  │
│    python i18n_tools.py translate --lang nl  (one lang)  │
│    python i18n_tools.py translate --force  (redo all)    │
│    python i18n_tools.py add-key           (one new key)  │
├──────────────────────────────────────────────────────────┤
│  IF SOMETHING BREAKS                                     │
│    Restore: rename i18n.js.bak → i18n.js                │
└──────────────────────────────────────────────────────────┘
```
