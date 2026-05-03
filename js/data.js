const PROGRAM = {
  Lundi: [
    { group: "Pectoraux", name: "Chest Press machine", sets: 4, reps: "8-12", rest: 90 },
    { group: "Pectoraux", name: "Développé incliné haltères", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Shoulder Press machine", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Élévations latérales haltères", sets: 4, reps: "12-15", rest: 60 },
    { group: "Triceps", name: "Triceps Pushdown (corde)", sets: 3, reps: "10-12", rest: 60 },
    { group: "Triceps", name: "Extension triceps au-dessus de la tête (poulie)", sets: 3, reps: "12", rest: 60 },
    { group: "Cardio", name: "Tapis incliné ou vélo", sets: 1, reps: "10-15 min", rest: 0 },
  ],

  Mardi: [
    { group: "Dos", name: "Lat Pulldown (tirage vertical)", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Seated Row machine", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Row haltère unilatéral", sets: 3, reps: "10-12", rest: 75 },
    { group: "Arrière épaules", name: "Face Pull (poulie)", sets: 3, reps: "12-15", rest: 60 },
    { group: "Biceps", name: "Curl barre EZ", sets: 3, reps: "10-12", rest: 60 },
    { group: "Biceps", name: "Curl marteau haltères", sets: 3, reps: "10-12", rest: 60 },
    { group: "Cardio", name: "Tapis incliné ou vélo", sets: 1, reps: "10-15 min", rest: 0 },
  ],

  Mercredi: [
    { group: "Jambes", name: "Leg Press machine", sets: 4, reps: "8-12", rest: 120 },
    { group: "Quadriceps", name: "Leg Extension", sets: 3, reps: "12", rest: 60 },
    { group: "Ischios", name: "Leg Curl", sets: 3, reps: "12", rest: 60 },
    { group: "Fessiers", name: "Hip Thrust (barre ou machine)", sets: 3, reps: "10-12", rest: 90 },
    { group: "Mollets", name: "Calf Raise machine", sets: 4, reps: "15", rest: 60 },
    { group: "Abdos", name: "Crunch machine", sets: 4, reps: "15", rest: 45 },
    { group: "Cardio", name: "Tapis incliné ou vélo", sets: 1, reps: "10-15 min", rest: 0 },
  ],

  Jeudi: [],

  Vendredi: [
    { group: "Pectoraux", name: "Chest Press machine", sets: 4, reps: "8-12", rest: 90 },
    { group: "Pectoraux", name: "Développé incliné haltères", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Shoulder Press machine", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Élévations latérales haltères", sets: 4, reps: "12-15", rest: 60 },
    { group: "Triceps", name: "Triceps Pushdown (corde)", sets: 3, reps: "10-12", rest: 60 },
    { group: "Triceps", name: "Extension triceps au-dessus de la tête (poulie)", sets: 3, reps: "12", rest: 60 },
    { group: "Cardio", name: "Tapis incliné ou vélo", sets: 1, reps: "10-15 min", rest: 0 },
  ],

  Samedi: [
    { group: "Dos", name: "Lat Pulldown (tirage vertical)", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Seated Row machine", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Row haltère unilatéral", sets: 3, reps: "10-12", rest: 75 },
    { group: "Arrière épaules", name: "Face Pull (poulie)", sets: 3, reps: "12-15", rest: 60 },
    { group: "Biceps", name: "Curl barre EZ", sets: 3, reps: "10-12", rest: 60 },
    { group: "Biceps", name: "Curl marteau haltères", sets: 3, reps: "10-12", rest: 60 },
    { group: "Cardio", name: "Tapis incliné ou vélo", sets: 1, reps: "10-15 min", rest: 0 },
  ],

  Dimanche: [
    { group: "Jambes", name: "Leg Press machine", sets: 4, reps: "8-12", rest: 120 },
    { group: "Quadriceps", name: "Leg Extension", sets: 3, reps: "12", rest: 60 },
    { group: "Ischios", name: "Leg Curl", sets: 3, reps: "12", rest: 60 },
    { group: "Fessiers", name: "Hip Thrust (barre ou machine)", sets: 3, reps: "10-12", rest: 90 },
    { group: "Mollets", name: "Calf Raise machine", sets: 4, reps: "15", rest: 60 },
    { group: "Abdos", name: "Crunch machine", sets: 4, reps: "15", rest: 45 },
    { group: "Cardio", name: "Tapis incliné ou vélo", sets: 1, reps: "10-15 min", rest: 0 },
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