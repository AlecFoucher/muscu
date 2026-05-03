const PROGRAM = {
  Lundi: [
    { group: "Pectoraux", name: "Chest Press machine", sets: 4, reps: "8-12", rest: 90 },
    { group: "Pectoraux", name: "Développé incliné haltères", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Shoulder Press machine", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Élévations latérales haltères", sets: 4, reps: "12-15", rest: 60 },
    { group: "Triceps", name: "Triceps Pushdown (poulie)", sets: 3, reps: "10-12", rest: 60 },
    { group: "Triceps", name: "Dips assistés", sets: 3, reps: "max", rest: 90 },
  ],

  Mardi: [
    { group: "Dos", name: "Lat Pulldown (tirage vertical)", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Seated Row (tirage horizontal)", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Row haltère unilatéral", sets: 3, reps: "10-12", rest: 75 },
    { group: "Arrière épaules", name: "Face Pull (poulie)", sets: 3, reps: "12-15", rest: 60 },
    { group: "Biceps", name: "Curl barre EZ", sets: 3, reps: "10-12", rest: 60 },
    { group: "Biceps", name: "Curl marteau haltères", sets: 3, reps: "10-12", rest: 60 },
  ],

  Mercredi: [
    { group: "Jambes", name: "Leg Press", sets: 4, reps: "8-12", rest: 120 },
    { group: "Quadriceps", name: "Leg Extension", sets: 3, reps: "12", rest: 60 },
    { group: "Ischios", name: "Leg Curl", sets: 3, reps: "12", rest: 60 },
    { group: "Fessiers", name: "Hip Thrust (barre ou machine)", sets: 3, reps: "10-12", rest: 90 },
    { group: "Mollets", name: "Calf Raise machine", sets: 4, reps: "15", rest: 60 },
    { group: "Abdos", name: "Crunch machine", sets: 4, reps: "15", rest: 45 },
  ],

  Jeudi: [],

  Vendredi: [
    { group: "Pectoraux", name: "Chest Press machine", sets: 4, reps: "8-12", rest: 90 },
    { group: "Pectoraux", name: "Développé incliné haltères", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Shoulder Press machine", sets: 3, reps: "8-12", rest: 90 },
    { group: "Épaules", name: "Élévations latérales haltères", sets: 4, reps: "12-15", rest: 60 },
    { group: "Triceps", name: "Triceps Pushdown (poulie)", sets: 3, reps: "10-12", rest: 60 },
    { group: "Triceps", name: "Dips assistés", sets: 3, reps: "max", rest: 90 },
  ],

  Samedi: [
    { group: "Dos", name: "Lat Pulldown (tirage vertical)", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Seated Row (tirage horizontal)", sets: 4, reps: "8-12", rest: 90 },
    { group: "Dos", name: "Row haltère unilatéral", sets: 3, reps: "10-12", rest: 75 },
    { group: "Arrière épaules", name: "Face Pull (poulie)", sets: 3, reps: "12-15", rest: 60 },
    { group: "Biceps", name: "Curl barre EZ", sets: 3, reps: "10-12", rest: 60 },
    { group: "Biceps", name: "Curl marteau haltères", sets: 3, reps: "10-12", rest: 60 },
  ],

  Dimanche: [
    { group: "Jambes", name: "Leg Press", sets: 4, reps: "8-12", rest: 120 },
    { group: "Quadriceps", name: "Leg Extension", sets: 3, reps: "12", rest: 60 },
    { group: "Ischios", name: "Leg Curl", sets: 3, reps: "12", rest: 60 },
    { group: "Fessiers", name: "Hip Thrust (barre ou machine)", sets: 3, reps: "10-12", rest: 90 },
    { group: "Mollets", name: "Calf Raise machine", sets: 4, reps: "15", rest: 60 },
    { group: "Abdos", name: "Crunch machine", sets: 4, reps: "15", rest: 45 },
  ],
};

const DAY_ORDER = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];