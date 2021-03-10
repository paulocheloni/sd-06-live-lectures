const getBooks = () => {
  return fetch(`http://localhost:3001/books`)
        .then(response => response.json())
}

const addBook = async (title) => {
  await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    });
}

// devendo com o erro de 404
const getBookById = (id) => {
  return fetch(`http://localhost:3001/books/${id}`)
        .then(response => response.json())
        // .catch(err => console.log(err));
}

const remove = (id) => {
  return fetch(`http://localhost:3001/books/${id}`, {
    method: 'DELETE'
  });
}

const updateBook = async (id, title) => {
  await fetch(`http://localhost:3001/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    });
}

export default {
  getBooks,
  addBook,
  getBookById,
  updateBook,
  remove
}