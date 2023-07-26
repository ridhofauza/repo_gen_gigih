import express from 'express';
import { v4 as uuid } from 'uuid';
import VideoProduct from '../models/VideoProduct.js';

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const videos = await VideoProduct.find();
      res.status(200).json(videos);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/:videoID', async (req, res) => {
   const { videoID: reqVideoID } = req.params;
   try {
      const video = await VideoProduct.find({ videoID: reqVideoID });
      res.status(200).json(video);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.patch('/:videoID', async (req, res) => {
   const { videoID: reqVideoID } = req.params;
   const { urlThumbnail: reqUrlThumbnail } = req.body;
   try {
      const videoToUpdate = await VideoProduct.findOneAndUpdate(
         {videoID: reqVideoID},
         {$set: { urlThumbnail: reqUrlThumbnail }},
         {new: true}
      );
      res.status(200).json(videoToUpdate);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.post('/', async (req, res) => {
   const { urlThumbnail } = req.body;
   try {
      const video = new VideoProduct({
         videoID: uuid(), // randomid
         urlThumbnail: urlThumbnail
      });
      const videoToSave = await video.save();
      res.status(201).json(videoToSave);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.delete('/:videoID', async (req, res) => {
   const { videoID: reqVideoID } = req.params;
   try {
      const video = await VideoProduct.deleteOne({ videoID: reqVideoID });
      res.status(200).json(video);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

export default router;