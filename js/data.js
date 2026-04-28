const PROGRAM = {
  Lundi: [
    { group: "Pectoraux",       name: "Chest Press machine",           sets: 4, reps: "10-12",    rest: 90  },
    { group: "Pectoraux",       name: "Pec Deck (Butterfly)",          sets: 4, reps: "12",        rest: 75  },
    { group: "Triceps",         name: "Triceps Pushdown (poulie)",     sets: 3, reps: "12",        rest: 60  },
    { group: "Triceps",         name: "Dips assistés (machine)",       sets: 3, reps: "8-10",      rest: 90  },
    { group: "Cardio",          name: "Tapis incliné ou vélo",         sets: 1, reps: "10-15 min", rest: 0   },
  ],
  Mardi: [
    { group: "Dos",             name: "Lat Pulldown (tirage vertical)", sets: 4, reps: "10-12",    rest: 90  },
    { group: "Dos",             name: "Seated Row machine",             sets: 4, reps: "10-12",    rest: 90  },
    { group: "Biceps",          name: "Biceps Curl machine",            sets: 3, reps: "12",        rest: 60  },
    { group: "Arrière épaules", name: "Face Pull (poulie)",             sets: 3, reps: "12-15",    rest: 60  },
    { group: "Cardio",          name: "Tapis incliné ou vélo",          sets: 1, reps: "10-15 min", rest: 0  },
  ],
  Mercredi: [],
  Jeudi: [
    { group: "Jambes",     name: "Leg Press machine",    sets: 4, reps: "10-12",    rest: 120 },
    { group: "Quadriceps", name: "Leg Extension",        sets: 3, reps: "12",        rest: 60  },
    { group: "Ischios",    name: "Leg Curl",             sets: 3, reps: "12",        rest: 60  },
    { group: "Mollets",    name: "Calf Raise machine",   sets: 4, reps: "15",        rest: 60  },
    { group: "Cardio",     name: "Tapis incliné ou vélo", sets: 1, reps: "10-15 min", rest: 0  },
  ],
  Vendredi: [
    { group: "Épaules", name: "Shoulder Press machine",  sets: 4, reps: "10-12",    rest: 90 },
    { group: "Épaules", name: "Lateral Raise machine",   sets: 3, reps: "12-15",    rest: 60 },
    { group: "Abdos",   name: "Ab Crunch machine",       sets: 4, reps: "15",        rest: 45 },
    { group: "Abdos",   name: "Cable Crunch",            sets: 3, reps: "15",        rest: 45 },
    { group: "Cardio",  name: "Tapis incliné ou vélo",   sets: 1, reps: "10-15 min", rest: 0  },
  ],
  Samedi:   [],
  Dimanche: [],
};

const DAY_ORDER = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

const MEALS = [
  {
    id: "poulet-riz",
    name: "Poulet riz brocoli",
    emoji: "🍗",
    macros: "~450 kcal · 45g P · 45g G · 8g L",
    ingredients: [
      { name: "Blanc de poulet",       qty: "150g"      },
      { name: "Riz basmati",           qty: "80g (cru)" },
      { name: "Brocoli",               qty: "200g"      },
      { name: "Huile d'olive",         qty: "1 c.à.c"   },
      { name: "Épices (paprika, ail)", qty: "QS"        },
    ],
  },
];
