import express from 'express';
import songService from '../service/songService.js';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Hello world');
});

router.get('/songs', (req, res) => {
   res.status(200).send(songService.getAll());
})

router.get('/songs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   if(songService.getById(id) === undefined) {
      res.status(404).send({ message: 'Data not found' });
   } else {
      res.status(200).send(songService.getById(id));
   }
})

router.post('/songs', (req, res) => {
   res.status(201).send(songService.add(req.body));
});

router.put('/songs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   if(songService.getById(id) === undefined) {
      res.status(404).send({ message: 'Data not found' });
   } else {
      res.status(200).send(songService.edit(id, req.body));
   }
});

router.delete('/songs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   if(songService.getById(id) === undefined) {
      res.status(404).send({ message: 'Data not found' });
   } else {
      res.status(200).send(songService.deleteVal(id));
   }
});

export default router;