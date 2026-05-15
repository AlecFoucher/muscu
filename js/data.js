const PROGRAM = {
  Lundi: [
    { group: "Pectoraux", name: "Chest Press Machine", sets: 4, reps: "8", rest: 90 },
    { group: "Pectoraux", name: "Pec Deck Fly", sets: 4, reps: "10", rest: 60 },
    { group: "Épaules", name: "Shoulder Press Machine", sets: 3, reps: "12", rest: 90 },
    { group: "Épaules", name: "Dumbbell Lateral Raise", sets: 4, reps: "10", rest: 60 },
    { group: "Triceps", name: "Tricep Rope Push-Down", sets: 4, reps: "10", rest: 60 },
    { group: "Triceps", name: "Dips", sets: 2, reps: "To Failure", rest: 90 },
  ],

  Mardi: [
    { group: "Biceps", name: "Dumbbell Bicep Curls", sets: 3, reps: "12", rest: 60 },
    { group: "Biceps", name: "Dumbbell Hammer Curls", sets: 3, reps: "12", rest: 60 },
    { group: "Dos", name: "Lat Pulldown Machine", sets: 3, reps: "10", rest: 90 },
    { group: "Dos", name: "Assisted Pullups", sets: 3, reps: "8", rest: 90 },
    { group: "Dos", name: "Seated Cable Row", sets: 3, reps: "10", rest: 90 },
    { group: "Arrière épaules", name: "Reverse Pec Deck Fly", sets: 3, reps: "12", rest: 60 },
  ],

  Mercredi: [
    { group: "Jambes", name: "Leg Press", sets: 3, reps: "8", rest: 120 },
    { group: "Quadriceps", name: "Leg Extension", sets: 4, reps: "10", rest: 60 },
    { group: "Ischios", name: "Seated Hamstring Curl", sets: 3, reps: "10", rest: 60 },
    { group: "Jambes", name: "Walking Lunges", sets: 3, reps: "8", rest: 90 },
    { group: "Mollets", name: "Standing Calf Raise", sets: 3, reps: "15", rest: 60 },
    { group: "Abdos", name: "Crunches", sets: 2, reps: "12", rest: 45 },
    { group: "Abdos", name: "Leg Raises", sets: 2, reps: "12", rest: 45 },
    { group: "Abdos", name: "Plank", sets: 3, reps: "20 seconds", rest: 45 },
  ],

  Jeudi: [],

  Vendredi: [
    { group: "Pectoraux", name: "Chest Press Machine", sets: 4, reps: "8", rest: 90 },
    { group: "Pectoraux", name: "Pec Deck Fly", sets: 4, reps: "10", rest: 60 },
    { group: "Épaules", name: "Shoulder Press Machine", sets: 3, reps: "12", rest: 90 },
    { group: "Épaules", name: "Dumbbell Lateral Raise", sets: 4, reps: "10", rest: 60 },
    { group: "Triceps", name: "Tricep Rope Push-Down", sets: 4, reps: "10", rest: 60 },
    { group: "Triceps", name: "Dips", sets: 2, reps: "To Failure", rest: 90 },
  ],

  Samedi: [
    { group: "Biceps", name: "Dumbbell Bicep Curls", sets: 3, reps: "12", rest: 60 },
    { group: "Biceps", name: "Dumbbell Hammer Curls", sets: 3, reps: "12", rest: 60 },
    { group: "Dos", name: "Lat Pulldown Machine", sets: 3, reps: "10", rest: 90 },
    { group: "Dos", name: "Assisted Pullups", sets: 3, reps: "8", rest: 90 },
    { group: "Dos", name: "Seated Cable Row", sets: 3, reps: "10", rest: 90 },
    { group: "Arrière épaules", name: "Reverse Pec Deck Fly", sets: 3, reps: "12", rest: 60 },
  ],

  Dimanche: [
    { group: "Jambes", name: "Leg Press", sets: 3, reps: "8", rest: 120 },
    { group: "Quadriceps", name: "Leg Extension", sets: 4, reps: "10", rest: 60 },
    { group: "Ischios", name: "Seated Hamstring Curl", sets: 3, reps: "10", rest: 60 },
    { group: "Jambes", name: "Walking Lunges", sets: 3, reps: "8", rest: 90 },
    { group: "Mollets", name: "Standing Calf Raise", sets: 3, reps: "15", rest: 60 },
    { group: "Abdos", name: "Crunches", sets: 2, reps: "12", rest: 45 },
    { group: "Abdos", name: "Leg Raises", sets: 2, reps: "12", rest: 45 },
    { group: "Abdos", name: "Plank", sets: 3, reps: "20 seconds", rest: 45 },
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