// ========== Promise
const getData = () => new Promise((resolve, reject) => {
   try {
      const songList = [
         { title: "Song 1", artists:[{ name: "artist name 1_1" }], duration: 200 },
         { title: "Song 2", artists:[{ name: "artist name 2_1" }, { name: "artist name 2_2" }], duration: 150 },
         { title: "Song 3", artists:[{ name: "artist name 3_1" }], duration: 210 },
         { title: "Song 4", artists:[{ name: "artist name 4_1" }, { name: "artist name 4_2" }], duration: 180 },
      ];
      setTimeout(() => resolve(songList), 200);
   } catch (error) {
      reject("Error: "+error.message);  
   }
});

getData()
   .then((res) => console.log(res))
   .catch((err) => console.log(err));

// ======== Async Await
const getAwaitData = async () => {
   try {
      const songData = await getData();
      console.log(songData);  
   } catch (error) {
      console.log(error.message);
   }
};

getAwaitData();