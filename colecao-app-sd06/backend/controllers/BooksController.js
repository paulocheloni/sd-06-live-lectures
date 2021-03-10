const { Router } = require('express');

const BooksController = Router();
const Book = require('../models/Book');

BooksController.get('/', async (req, res) => {
  const books = await Book.getAll();

  console.log(books)

  res.json(books)
});

BooksController.post('/', async (req, res) => {
  const { title } = req.body;

  await Book.add(title);
  
  res.status(201).json({ title })
});

BooksController.get('/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ok: false, message: 'Livro não encontrado'})
  
  res.status(200).json({ok: true, book})
});

BooksController.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.remove(id);
  
  res.status(200).json(book)
});

BooksController.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  
  const book = await Book.update(id, title)


  res.status(201).json(book)
});

module.exports = BooksController;
