db.burgers.find({
  comentarios: { $size: 3 }
})

// Dá erro
db.burgers.find({
  comentarios: { $size: { $lt: 2 } }
})

// Error: error: {
//   "ok": 0,
//   "errmsg": "$size needs a number",
//   "code": 2,
//   "codeName": "BadValue"
// }