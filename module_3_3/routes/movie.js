import express from 'express';
import MovieModel from '../models/Movie.js';

const router = express.Router();

router.post('/', async (req, res) => {
   const { title, year } = req.body;
   try {
      const movie = new MovieModel({
         title: title,
         year: year
      });
      const movieToSave = await movie.save();
      res.status(201).json(movieToSave);
   } catch(error) {
      res.status(400).json({ message: error.message });
   }
});

router.get('/', async (req, res) => {
   try {
      const movies = await MovieModel.find();
      res.status(200).json(movies);
   } catch(error) {
      res.status(500).json({ message: error.message });
   }
})

router.get('/:id', async (req, res) => {
   try {
      const movie = await MovieModel.findById(req.params.id);
      if(movie) {
         res.status(200).json(movie);
      } else {
         res.status(404).json({ message: 'Movie Not Found' });
      }
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.patch('/:id', async (req, res) => {
   try {
      const id = req.params.id;
      const updatedMovieData = req.body;
      const options = { new: true };

      const result = await MovieModel.findByIdAndUpdate(
         id, updatedMovieData, options
      );
      res.send(result);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.delete('/:id', async(req, res) => {
   try {
      const id = req.params.id;
      const deletedMovieData = await MovieModel.findByIdAndDelete(id);
      res.send(`Movie with ${deletedMovieData.title} has been deleted.`);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

export default router;