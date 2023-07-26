import express from 'express';
import VideoProduct from '../models/VideoProduct.js';

const router = express.Router();

router.get('/:videoID', async (req, res) => {
   const idParams = req.params.videoID;
   try {
      const getComments = await VideoProduct.find({ videoID: idParams }, { "comments.username": 1, "comments.comment": 1, "comments._id": 1 });
      res.status(200).json(getComments[0].comments);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/id/:commentID', async (req, res) => {
   const idParams = req.params.commentID;
   try {
      const getComments = await VideoProduct.find({ "comments._id": idParams }, { "comments.username": 1, "comments.comment": 1, "comments._id": 1});
      const comment = getComments[0].comments.find((val) => {
         if(val._id == idParams) {
            return val;
         }
      });
      res.status(200).json(comment);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.post('/', async (req, res) => {
   const { videoID: reqVideoID, username: reqUsername, comment: reqComment } = req.body;
   try {
      const comment = {
         username: reqUsername,
         comment: reqComment,
         created_at: new Date(),
         updated_at: ""
      };
      const commentToSave = await VideoProduct.findOneAndUpdate(
         {videoID: reqVideoID},
         {$push: { comments: comment }},
         {new: true}
      );
      const result = commentToSave
      res.status(201).json(result.comments[result.comments.length-1]);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.patch('/:videoID/:commentID', async(req, res) => {
   const { videoID: reqVideoID, commentID: reqCommentID } = req.params;
   const { username: reqUsername, comment: reqComment } = req.body;
   try {
      const getOldComments = await VideoProduct.find({ "comments._id": reqCommentID }, { "comments.username": 1, "comments.comment": 1, "comments._id": 1, "comments.created_at": 1});
      const oldComment = getOldComments[0].comments.find((val) => {
         if(val._id == reqCommentID) {
            return val;
         }
      }); 
      const comment = {
         username: reqUsername,
         comment: reqComment,
         created_at: oldComment.created_at == undefined ? new Date() : oldComment.created_at,
         updated_at: new Date()
      };
      const commentToUpdate = await VideoProduct.findOneAndUpdate(
         {videoID: reqVideoID, "comments._id": reqCommentID},
         {"comments.$": comment },
         {new: true}
      );
      res.status(200).json(commentToUpdate);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.delete('/:videoID/:commentID', async (req, res) => {
   const { videoID: reqVideoID, commentID: reqCommentID } = req.params;
   try {
      const deleteComment = await VideoProduct.findOneAndUpdate(
         {videoID: reqVideoID},
         {$pull: { comments: { _id: reqCommentID } }},
         {new: true}
      );
      res.send(deleteComment);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});
export default router;