import songModel from '../model/songModel.js';

function getAll() {
   return songModel.getAll();
}

function getById(id) {
   return songModel.getById(id);
}

function add({ title, artists, url }) {
   const songs = songModel.getAll();
   let id;
   if(songs.length < 1) {
      id=1;
   } else {
      id=songs[songs.length-1].id+1;
   }

   const song = {
      id: id,
      title: title,
      artists: artists,
      url: url
   };
   return songModel.add(song);
}

function edit(id, { title, artists, url }) {
   const newSong = {
      id: id,
      title: title,
      artists: artists,
      url: url
   };
   return songModel.edit(id, newSong);
}

function deleteVal(id) {
   return songModel.deleteVal(id);
}

export default {
   getAll,
   getById,
   add,
   edit,
   deleteVal
}