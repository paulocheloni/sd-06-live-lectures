// se o valor atual for maior diminui para o valor passado
db.students.find({}, {_id: 1, bestScore: 1});

db.students.updateMany(
  {},
  { $max: { bestScore: 8.0 } }
);

// se o valor atual for menor aumenta para o valor passado
db.students.updateMany(
  {},
  { $min: { bestScore: 9.0 } }
);