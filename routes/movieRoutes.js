const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST add new movie
router.post('/', async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update movie by id
router.put('/:id', async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // runValidators ตรวจสอบ schema ก่อน update
    );
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE movie by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
