const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'live_lecture_27_1'
});

const getAll = async () => {
  const [characters] = await connection.execute('SELECT * FROM live_lecture_27_1.characters;');

  return characters;
}

const findById = async (id) => {
  const [[character]] = await connection.execute('SELECT * FROM live_lecture_27_1.characters WHERE id=?;', [id]);

  if (!character) return null;
  
  return character;
}

const create = async (name, cartoon) => {
  const [{insertId}] = await connection.execute('INSERT INTO characters (name, cartoon) VALUES (?, ?)', [name, cartoon]);
  
  return {
    id: insertId,
    name,
    cartoon
  };
}

module.exports = {
  getAll,
  findById,
  create
}