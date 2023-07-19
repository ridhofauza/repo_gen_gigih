const songs = [
   { id: 1, title: 'In the End', artists: ['Linkin Park'], url: 'https://open.spotify.com/embed/track/60a0Rd6pjrkxjPbaKzXjfq' },
   { id: 2, title: 'Heavy (feat. Kiiara)', artists: ['Linkin Park', 'Kiiara'], url: 'https://open.spotify.com/embed/track/104buTcnP2AsxqB7U1FIZ4' },
   { id: 3, title: 'Hidup adalah Perjuangan', artists: ['Dewa 19'], url: 'https://open.spotify.com/embed/track/4DwtjWgoWRqfV4Lr0zICGP' },
   { id: 4, title: 'Cukup Siti Nurbaya', artists: ['Dewa 19'], url: 'https://open.spotify.com/embed/track/4nf1nfQgjTasTSdUclCsDf' },
   { id: 5, title: 'Xpresikan', artists: ['Bondan Prakoso', 'Fade2Black'], url: 'https://open.spotify.com/embed/track/3UvWFcpjN2MNdsyCrZyf3D' },
];

// const songs = [];

function add(song) {
   songs.push(song);
   return song;
}

function edit(id, song) {
   songs[id-1] = song;
   return songs[id-1];
}

function getById(id) {
   return songs.find((song) => song.id === id);
}

function getAll() {
   return songs;
}

function deleteVal(id) {
   const song = songs.find((song) => song.id === id);
   const idx = songs.findIndex((song) => song.id === id);
   songs.splice(idx, 1);
   return song;
}

export default { 
   add, 
   edit,
   getById,
   getAll,
   deleteVal
};