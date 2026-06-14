// =============================================================================
// src/data/qualifierQuestions.js
// =============================================================================
// Defines every question in the pre-contact qualifier wizard.
//
// HOW TO ADD / REMOVE / REORDER QUESTIONS:
//   - Reorder by changing the order of objects in this array.
//   - Remove a question by deleting its object (or commenting it out).
//   - Add a question by copying the shape of a similar type below.
//
// QUESTION TYPES:
//   'slider'      → 0–10 range input with descriptive labels at each end
//   'choice'      → single-select button grid
//   'multiselect' → multi-select chip grid (toggle on/off)
//   'text'        → open textarea, always optional
//
// All visible text comes from i18n (t.qualifier.*) so the wizard is fully
// translated. Brand/technology names (Siemens, Rockwell, etc.) are plain
// strings — they don't need translation.
//
// "id" is the key used when building the summary sent to the contact form.
// =============================================================================

export const qualifierQuestions = [

  // ── Q1: Data feedback maturity ──────────────────────────────────────────
  {
    id:   'dataFeedback',
    type: 'slider',
    min:  0,
    max:  10,
    step: 1,
    // i18n keys — see tools/i18n_qualifier_additions.js
    labelKey:       'q1_label',
    descriptionKey: 'q1_description',
    // Shown below the slider at roughly these positions (0, ~3, ~7, 10)
    scaleLabelKeys: ['q1_scale_0', 'q1_scale_low', 'q1_scale_high', 'q1_scale_10'],
  },

  // ── Q2: Business size ────────────────────────────────────────────────────
  {
    id:   'businessSize',
    type: 'choice',
    labelKey: 'q2_label',
    options: [
      { value: 'freelance', labelKey: 'q2_opt_freelance' },
      { value: 'small',     labelKey: 'q2_opt_small'     },
      { value: 'medium',    labelKey: 'q2_opt_medium'    },
      { value: 'large',     labelKey: 'q2_opt_large'     },
      { value: 'enterprise',labelKey: 'q2_opt_enterprise'},
    ],
  },

  // ── Q3: Production scale (number of lines / sites) ─────────────────────
  {
    id:   'productionScale',
    type: 'choice',
    labelKey: 'q3_label',
    options: [
      { value: 'single_cell',  labelKey: 'q3_opt_single'  },
      { value: 'single_line',  labelKey: 'q3_opt_line'    },
      { value: 'multi_line',   labelKey: 'q3_opt_multi'   },
      { value: 'multi_site',   labelKey: 'q3_opt_sites'   },
    ],
  },

  // ── Q4: Type of production ───────────────────────────────────────────────
  {
    id:   'productionType',
    type: 'choice',
    labelKey: 'q4_label',
    options: [
      { value: 'food_beverage', labelKey: 'q4_opt_food'      },
      { value: 'packaging',     labelKey: 'q4_opt_packaging' },
      { value: 'automotive',    labelKey: 'q4_opt_automotive'},
      { value: 'maritime_hvac', labelKey: 'q4_opt_maritime'  },
      { value: 'manufacturing', labelKey: 'q4_opt_manufacturing' },
      { value: 'logistics',     labelKey: 'q4_opt_logistics' },
      { value: 'other',         labelKey: 'q4_opt_other'     },
    ],
  },

  // ── Q5 (addition): Current platforms in use ─────────────────────────────
  // Multi-select — directly maps to the Technologies section.
  // Brand names are NOT translated (same rule as elsewhere in the project).
  {
    id:   'platforms',
    type: 'multiselect',
    labelKey:       'q5_label',
    descriptionKey: 'q5_description',
    options: [
      { value: 'siemens',   label: 'Siemens'   },
      { value: 'rockwell',  label: 'Rockwell'  },
      { value: 'codesys',   label: 'CoDeSys'   },
      { value: 'beckhoff',  label: 'Beckhoff'  },
      { value: 'schneider', label: 'Schneider' },
      { value: 'omron',     label: 'Omron'     },
      { value: 'other',     labelKey: 'q5_opt_other'        },
      { value: 'unknown',   labelKey: 'q5_opt_unknown'      },
    ],
  },

  // ── Q6: What do you want AI feedback for? (open) ────────────────────────
  {
    id:   'aiGoals',
    type: 'text',
    labelKey:       'q6_label',
    descriptionKey: 'q6_description',
    placeholderKey: 'q6_placeholder',
  },

  // ── Q7: In-house engineering ─────────────────────────────────────────────
  {
    id:   'inHouseEngineering',
    type: 'choice',
    labelKey: 'q7_label',
    options: [
      { value: 'yes',     labelKey: 'q7_opt_yes'     },
      { value: 'partial', labelKey: 'q7_opt_partial' },
      { value: 'no',      labelKey: 'q7_opt_no'      },
    ],
  },

  // ── Q8: Current challenges (open) ────────────────────────────────────────
  {
    id:   'challenges',
    type: 'text',
    labelKey:       'q8_label',
    descriptionKey: 'q8_description',
    placeholderKey: 'q8_placeholder',
  },

  // ── Q9: Investment range ─────────────────────────────────────────────────
  {
    id:   'investment',
    type: 'choice',
    labelKey: 'q9_label',
    options: [
      { value: 'exploring', labelKey: 'q9_opt_exploring' },
      { value: 'under10k',  labelKey: 'q9_opt_under10k'  },
      { value: '10to50k',   labelKey: 'q9_opt_10to50k'   },
      { value: '50to150k',  labelKey: 'q9_opt_50to150k'  },
      { value: 'over150k',  labelKey: 'q9_opt_over150k'  },
    ],
  },

  // ── Q10 (addition): Timeline / urgency ──────────────────────────────────
  {
    id:   'timeline',
    type: 'choice',
    labelKey: 'q10_label',
    options: [
      { value: 'asap',      labelKey: 'q10_opt_asap'      },
      { value: '1to3',      labelKey: 'q10_opt_1to3'      },
      { value: '3to6',      labelKey: 'q10_opt_3to6'      },
      { value: 'exploring', labelKey: 'q10_opt_exploring' },
    ],
  },

];

// =============================================================================
// formatQualifierSummary
// =============================================================================
// Converts the answers object into a readable text block that gets sent
// to the Worker and included in the email. Uses translated labels so the
// summary reads naturally for the visitor's language (and for you reading it).
//
// answers = { dataFeedback: 7, businessSize: 'medium', platforms: ['siemens','rockwell'], ... }
// =============================================================================
export function formatQualifierSummary(answers, t) {
  if (!answers || Object.keys(answers).length === 0) return '';

  const q = t.qualifier;
  if (!q) return '';

  const lines = [];

  qualifierQuestions.forEach(({ id, type, labelKey, options, scaleLabelKeys }) => {
    const value = answers[id];
    if (value === undefined || value === null || value === '') return;
    if (Array.isArray(value) && value.length === 0) return;

    const label = q[labelKey] || id;

    switch (type) {
      case 'slider': {
        // Pick the nearest scale label for context (0, low, high, 10)
        let scaleLabel = '';
        if (scaleLabelKeys) {
          if (value === 0)        scaleLabel = q[scaleLabelKeys[0]];
          else if (value <= 4)    scaleLabel = q[scaleLabelKeys[1]];
          else if (value <= 9)    scaleLabel = q[scaleLabelKeys[2]];
          else                    scaleLabel = q[scaleLabelKeys[3]];
        }
        lines.push(`${label}: ${value}/10${scaleLabel ? ` (${scaleLabel})` : ''}`);
        break;
      }
      case 'choice': {
        const opt = options.find((o) => o.value === value);
        lines.push(`${label}: ${opt ? (q[opt.labelKey] || opt.value) : value}`);
        break;
      }
      case 'multiselect': {
        const selected = value.map((v) => {
          const opt = options.find((o) => o.value === v);
          if (!opt) return v;
          return opt.label || q[opt.labelKey] || opt.value;
        });
        lines.push(`${label}: ${selected.join(', ')}`);
        break;
      }
      case 'text': {
        lines.push(`${label}: ${value}`);
        break;
      }
      default:
        break;
    }
  });

  if (lines.length === 0) return '';

  return `${q.summaryHeading}\n${'─'.repeat(40)}\n${lines.join('\n')}`;
}