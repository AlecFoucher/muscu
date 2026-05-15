// Pour ajouter une image ou vidéo à un exercice, ajoute le champ :
//   media: "media/nom-du-fichier.jpg"   ← image
//   media: "media/nom-du-fichier.mp4"   ← vidéo
// Place le fichier dans le dossier /media/

const PROGRAM = {
  Lundi: [
    { group: "Pectoraux", name: "Chest Press Machine", sets: 4, reps: "8", rest: 90, media: "media/chest-press.gif" },
    { group: "Pectoraux", name: "Pec Deck Fly", sets: 4, reps: "10", rest: 60, media: "media/pec-deck-fly.gif" },
    { group: "Épaules", name: "Shoulder Press Machine", sets: 3, reps: "12", rest: 90, media: "media/shoulder-press.gif" },
    { group: "Épaules", name: "Dumbbell Lateral Raise", sets: 4, reps: "10", rest: 60, media: "media/lateral-raise.gif" },
    { group: "Triceps", name: "Tricep Rope Push-Down", sets: 4, reps: "10", rest: 60, media: "media/tricep-rope-pushdown.gif" },
    { group: "Triceps", name: "Dips", sets: 2, reps: "To Failure", rest: 90, media: "media/dips.gif" },
  ],

  Mardi: [
    { group: "Biceps", name: "Dumbbell Bicep Curls", sets: 3, reps: "12", rest: 60, media: "media/bicep-curl.gif" },
    { group: "Biceps", name: "Dumbbell Hammer Curls", sets: 3, reps: "12", rest: 60, media: "media/hammer-curl.gif" },
    { group: "Dos", name: "Lat Pulldown Machine", sets: 3, reps: "10", rest: 90, media: "media/lat-pulldown.gif" },
    { group: "Dos", name: "Assisted Pullups", sets: 3, reps: "8", rest: 90, media: "media/assisted-pullup.gif" },
    { group: "Dos", name: "Seated Cable Row", sets: 3, reps: "10", rest: 90, media: "media/seated-cable-row.gif" },
    { group: "Arrière épaules", name: "Reverse Pec Deck Fly", sets: 3, reps: "12", rest: 60, media: "media/reverse-fly.gif" },
  ],

  Mercredi: [
    { group: "Jambes", name: "Leg Press", sets: 3, reps: "8", rest: 120, media: "media/leg-press.gif" },
    { group: "Quadriceps", name: "Leg Extension", sets: 4, reps: "10", rest: 60, media: "media/leg-extension.gif" },
    { group: "Ischios", name: "Seated Hamstring Curl", sets: 3, reps: "10", rest: 60, media: "media/hamstring-curl.gif" },
    { group: "Jambes", name: "Walking Lunges", sets: 3, reps: "8", rest: 90, media: "media/walking-lunges.gif" },
    { group: "Mollets", name: "Standing Calf Raise", sets: 3, reps: "15", rest: 60, media: "media/calf-raise.gif" },
    { group: "Abdos", name: "Crunches", sets: 2, reps: "12", rest: 45, media: "media/crunches.gif" },
    { group: "Abdos", name: "Leg Raises", sets: 2, reps: "12", rest: 45, media: "media/leg-raises.gif" },
    { group: "Abdos", name: "Plank", sets: 3, reps: "20 seconds", rest: 45, media: "media/plank.gif" },
  ],

  Jeudi: [],

  Vendredi: [
    { group: "Pectoraux", name: "Chest Press Machine", sets: 4, reps: "8", rest: 90, media: "media/chest-press.gif" },
    { group: "Pectoraux", name: "Pec Deck Fly", sets: 4, reps: "10", rest: 60, media: "media/pec-deck-fly.gif" },
    { group: "Épaules", name: "Shoulder Press Machine", sets: 3, reps: "12", rest: 90, media: "media/shoulder-press.gif" },
    { group: "Épaules", name: "Dumbbell Lateral Raise", sets: 4, reps: "10", rest: 60, media: "media/lateral-raise.gif" },
    { group: "Triceps", name: "Tricep Rope Push-Down", sets: 4, reps: "10", rest: 60, media: "media/tricep-rope-pushdown.gif" },
    { group: "Triceps", name: "Dips", sets: 2, reps: "To Failure", rest: 90, media: "media/dips.gif" },
  ],

  Samedi: [
    { group: "Biceps", name: "Dumbbell Bicep Curls", sets: 3, reps: "12", rest: 60, media: "media/bicep-curl.gif" },
    { group: "Biceps", name: "Dumbbell Hammer Curls", sets: 3, reps: "12", rest: 60, media: "media/hammer-curl.gif" },
    { group: "Dos", name: "Lat Pulldown Machine", sets: 3, reps: "10", rest: 90, media: "media/lat-pulldown.gif" },
    { group: "Dos", name: "Assisted Pullups", sets: 3, reps: "8", rest: 90, media: "media/assisted-pullup.gif" },
    { group: "Dos", name: "Seated Cable Row", sets: 3, reps: "10", rest: 90, media: "media/seated-cable-row.gif" },
    { group: "Arrière épaules", name: "Reverse Pec Deck Fly", sets: 3, reps: "12", rest: 60, media: "media/reverse-fly.gif" },
  ],

  Dimanche: [
    { group: "Jambes", name: "Leg Press", sets: 3, reps: "8", rest: 120, media: "media/leg-press.gif" },
    { group: "Quadriceps", name: "Leg Extension", sets: 4, reps: "10", rest: 60, media: "media/leg-extension.gif" },
    { group: "Ischios", name: "Seated Hamstring Curl", sets: 3, reps: "10", rest: 60, media: "media/hamstring-curl.gif" },
    { group: "Jambes", name: "Walking Lunges", sets: 3, reps: "8", rest: 90, media: "media/walking-lunges.gif" },
    { group: "Mollets", name: "Standing Calf Raise", sets: 3, reps: "15", rest: 60, media: "media/calf-raise.gif" },
    { group: "Abdos", name: "Crunches", sets: 2, reps: "12", rest: 45, media: "media/crunches.gif" },
    { group: "Abdos", name: "Leg Raises", sets: 2, reps: "12", rest: 45, media: "media/leg-raises.gif" },
    { group: "Abdos", name: "Plank", sets: 3, reps: "20 seconds", rest: 45, media: "media/plank.gif" },
  ],
};

const DAY_ORDER = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

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