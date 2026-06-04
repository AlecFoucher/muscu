// Pour ajouter une image ou vidéo à un exercice, ajoute le champ :
//   media: "media/nom-du-fichier.jpg"   ← image
//   media: "media/nom-du-fichier.mp4"   ← vidéo
// Place le fichier dans le dossier /media/

const PROGRAM = {
  "Jour 1": [
    { group: "Pectoraux", name: "Développé couché barre / Machine convergente", sets: 4, reps: "6-8",   rest: 150, media: "media/bench-press.gif" },
    { group: "Pectoraux", name: "Développé incliné haltères / Machine inclinée", sets: 3, reps: "8-10",  rest: 120, media: "media/incline-press.gif" },
    { group: "Pectoraux", name: "Chest Press assis",                              sets: 3, reps: "10-12", rest: 90,  media: "media/chest-press.gif" },
    { group: "Pectoraux", name: "Pec Deck / Écartés poulie",                      sets: 3, reps: "12-15", rest: 90,  media: "media/pec-deck-fly.gif" },
    { group: "Biceps",    name: "Curl barre EZ",                                  sets: 3, reps: "8-12",  rest: 90,  media: "media/ez-bar-curl.gif" },
    { group: "Biceps",    name: "Curl incliné haltères",                          sets: 3, reps: "10-12", rest: 90,  media: "media/incline-curl.gif" },
    { group: "Biceps",    name: "Curl marteau haltères / Corde",                  sets: 2, reps: "12-15", rest: 60,  media: "media/hammer-curl.gif" },
  ],

  "Jour 2": [
    { group: "Cardio", name: "Marche dehors",                          sets: 1, reps: "30-60 min", rest: 0, media: "media/walking.gif" },
    { group: "Cardio", name: "Tapis incliné (8-12 % · 4,5-6 km/h)", sets: 1, reps: "20-30 min", rest: 0, media: "media/treadmill.gif" },
  ],

  "Jour 3": [
    { group: "Jambes",      name: "Presse à cuisses",                                   sets: 4, reps: "8-12",    rest: 120, media: "media/leg-press.gif" },
    { group: "Quadriceps",  name: "Hack squat / Squat guidé Smith machine",             sets: 3, reps: "8-10",    rest: 120, media: "media/hack-squat.gif" },
    { group: "Ischios",     name: "Soulevé de terre jambes tendues haltères / Barre",   sets: 3, reps: "8-12",    rest: 120, media: "media/romanian-deadlift.gif" },
    { group: "Ischios",     name: "Leg curl assis ou couché",                           sets: 3, reps: "10-15",   rest: 90,  media: "media/hamstring-curl.gif" },
    { group: "Quadriceps",  name: "Leg extension",                                      sets: 3, reps: "12-15",   rest: 60,  media: "media/leg-extension.gif" },
    { group: "Mollets",     name: "Mollets debout / Presse",                            sets: 4, reps: "12-20",   rest: 60,  media: "media/calf-raise.gif" },
    { group: "Abdos",       name: "Crunch à la poulie",                                 sets: 3, reps: "12-20",   rest: 45,  media: "media/cable-crunch.gif" },
    { group: "Abdos",       name: "Relevés de jambes chaise romaine / Suspendu",        sets: 3, reps: "10-15",   rest: 45,  media: "media/leg-raises.gif" },
    { group: "Abdos",       name: "Gainage",                                            sets: 2, reps: "45-60 sec", rest: 45, media: "media/plank.gif" },
  ],

  "Jour 4": [
    { group: "Repos actif", name: "Marche tranquille",  sets: 1, reps: "30-45 min", rest: 0, media: "media/walking.gif" },
    { group: "Repos actif", name: "Mobilité légère",    sets: 1, reps: "10-15 min", rest: 0, media: "media/mobility.gif" },
  ],

  "Jour 5": [
    { group: "Dos",      name: "Tirage vertical prise neutre / Pronation",      sets: 4, reps: "8-10",  rest: 90, media: "media/lat-pulldown.gif" },
    { group: "Dos",      name: "Rowing machine convergente / Rowing assis",     sets: 4, reps: "8-10",  rest: 90, media: "media/seated-cable-row.gif" },
    { group: "Dos",      name: "Rowing poulie basse",                           sets: 3, reps: "10-12", rest: 90, media: "media/low-cable-row.gif" },
    { group: "Dos",      name: "Pull-over poulie / Machine",                    sets: 3, reps: "12-15", rest: 75, media: "media/pullover.gif" },
    { group: "Épaules",  name: "Face pull",                                     sets: 3, reps: "12-20", rest: 60, media: "media/face-pull.gif" },
    { group: "Triceps",  name: "Extension triceps corde à la poulie",           sets: 3, reps: "10-15", rest: 75, media: "media/tricep-rope-pushdown.gif" },
    { group: "Triceps",  name: "Extension triceps au-dessus de la tête corde",  sets: 3, reps: "12-15", rest: 75, media: "media/overhead-tricep.gif" },
    { group: "Triceps",  name: "Dips assistés / Machine dips",                  sets: 2, reps: "8-12",  rest: 90, media: "media/dips.gif" },
  ],

  "Jour 6": [
    { group: "Cardio", name: "Marche dehors",                          sets: 1, reps: "45-60 min", rest: 0, media: "media/walking.gif" },
    { group: "Cardio", name: "Tapis incliné (8-12 % · 4,5-6 km/h)", sets: 1, reps: "20-30 min", rest: 0, media: "media/treadmill.gif" },
    { group: "Cardio", name: "Jogging léger",                          sets: 1, reps: "15-25 min", rest: 0, media: "media/jogging.gif" },
  ],

  "Jour 7": [],
};

const DAY_ORDER = ["Jour 1", "Jour 2", "Jour 3", "Jour 4", "Jour 5", "Jour 6", "Jour 7"];

const MEALS = [
  {
    id: "poulet-riz",
    name: "Poulet riz",
    emoji: "🍗🍚",
    macros: "~400 kcal · 35g P · 45g G · 7g L",
    ingredients: [
      { name: "Blanc de poulet", qty: "120g",      category: "Viandes & Protéines" },
      { name: "Riz basmati",     qty: "80g (cru)",  category: "Féculents" },
      { name: "Huile d'olive",   qty: "1 c.à.c",   category: "Épicerie" },
      { name: "Épices",          qty: "QS",         category: "Épicerie" },
    ],
  },

  {
    id: "poulet-pates",
    name: "Poulet pâtes",
    emoji: "🍗🍝",
    macros: "~420 kcal · 35g P · 50g G · 7g L",
    ingredients: [
      { name: "Blanc de poulet", qty: "120g",      category: "Viandes & Protéines" },
      { name: "Pâtes",           qty: "80g (cru)",  category: "Féculents" },
      { name: "Huile d'olive",   qty: "1 c.à.c",   category: "Épicerie" },
      { name: "Épices",          qty: "QS",         category: "Épicerie" },
    ],
  },

  {
    id: "omelette-riz",
    name: "Omelette riz",
    emoji: "🍳🍚",
    macros: "~440 kcal · 30g P · 45g G · 15g L",
    ingredients: [
      { name: "Œufs",        qty: "3",          category: "Viandes & Protéines" },
      { name: "Riz basmati", qty: "70g (cru)",  category: "Féculents" },
      { name: "Sel / poivre", qty: "QS",        category: "Épicerie" },
    ],
  },

  {
    id: "steak-riz",
    name: "Steak haché riz",
    emoji: "🥩🍚",
    macros: "~460 kcal · 35g P · 45g G · 12g L",
    ingredients: [
      { name: "Steak haché 5%", qty: "150g",      category: "Viandes & Protéines" },
      { name: "Riz basmati",    qty: "70g (cru)",  category: "Féculents" },
      { name: "Sel / poivre",   qty: "QS",         category: "Épicerie" },
    ],
  },

  {
    id: "steak-pates",
    name: "Steak haché pâtes",
    emoji: "🥩🍝",
    macros: "~480 kcal · 35g P · 50g G · 12g L",
    ingredients: [
      { name: "Steak haché 5%", qty: "150g",      category: "Viandes & Protéines" },
      { name: "Pâtes",          qty: "80g (cru)",  category: "Féculents" },
      { name: "Sel / poivre",   qty: "QS",         category: "Épicerie" },
    ],
  },

];

const CATEGORY_ORDER = ["Viandes & Protéines", "Féculents", "Épicerie"];
