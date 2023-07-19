import { songs } from './data.js';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
   res.setHeader('Content-Type', 'application/json');
   next();
});

app.get('/', (req, res) => {
   res.send('Hello world');
});

app.get('/songs', (req, res) => {
   res.send(songs);
});

app.get('/songs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const song = songs.find((data) => data.id === id);
   if(song === undefined) {
      res.status(404).send({message: "Data not found"});
   } else {
      res.status(200).send(song);
   }
});

app.post('/songs', (req, res) => {
   // create id
   let id;
   if(songs.length < 1) {
      id=1;
   } else {
      id=songs[songs.length-1].id+1;
   }

   const { title, artists, url } = req.body;
   const song = {
      id: id,
      title: title,
      artists: artists,
      url: url
   };
   songs.push(song);

   res.status(201).send(song);
});

app.put('/songs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   // cek if data exist
   const song = songs.find((data) => data.id === id);
   if(song === undefined) {
      res.status(404).send({ message: "Data not found" });
   } else {
      const newSong = {
         id: id,
         title: req.body.title,
         artists: req.body.artists,
         url: req.body.url
      };
      songs[id-1] = newSong;
      // res.status(200).send(songs);
      res.status(200).send(songs[id-1]);
   }
});

app.delete('/songs/:id', (req, res) => {
   const id = parseInt(req.params.id);
   // cek if data exist
   const song = songs.find((data) => data.id === id);
   if(song === undefined) {
      res.status(404).send({ message: "Data not found" });
   } else {
      //delete data
      const idx = songs.findIndex((song) => song.id === id);
      songs.splice(idx, 1);
      res.status(200).send(song);
   }
});

app.use((req, res) => {
   res.status(404).send({ message: "Page not found" });
});

app.listen(port, () => {
   console.log(`Playlist app listening on port ${port}`);
});