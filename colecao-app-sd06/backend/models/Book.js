const connection = require('./connection');

const getAll = async () => {
  const [ books ] = await connection.execute('SELECT * FROM books_api.books');

  return books;
}

const add = async (title) => {
  const [{insertId}] = await connection.execute('INSERT INTO books_api.books (title) VALUES (?)', [title]);

  return {
    id: insertId,
    title
  }
}

const findById = async (id) => {
  const [ [book] ] = await connection.execute('SELECT * FROM books_api.books WHERE id=?', [id]);

  return book;
}

const remove = async (id) => {
  await connection.execute('DELETE FROM books_api.books WHERE id=?', [id]);

  return book;
}

const update = async (id, title) => {
  await connection.execute('UPDATE books_api.books SET title=? WHERE id=?', [title, id]);
  
  return true;
}

module.exports = {
  getAll,
  add,
  findById,
  remove,
  update
}