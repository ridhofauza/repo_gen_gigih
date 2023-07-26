import express from 'express';
import VideoProduct from '../models/VideoProduct.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/:videoID', async (req, res) => {
   const idParams = req.params.videoID;
   try {
      const getProducts = await VideoProduct.find({ videoID: idParams }, { products: 1 });
      res.status(200).json(getProducts[0].products);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/id/:productID', async (req, res) => {
   const idParams = req.params.productID;
   try {
      const getProducts = await VideoProduct.find({ "products.productID": idParams }, { products: 1 });
      const product = getProducts[0].products.find((val) => {
         if (val.productID == idParams) {
            return val;
         }
      });
      res.status(200).json(product);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.post('/', async (req, res) => {
   const { videoID: reqVideoID, linkProduct: reqLinkProduct, title: reqTitle, price: reqPrice } = req.body;
   try {
      const product = {
         productID: `prod-${uuid()}`,
         linkProduct: reqLinkProduct,
         title: reqTitle,
         price: reqPrice,
      };
      const productToSave = await VideoProduct.findOneAndUpdate(
         {videoID: reqVideoID},
         {$push: { products: product }},
         {new: true}
      );
      const result = productToSave
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.patch('/:videoID/:productID', async(req, res) => {
   const { videoID: reqVideoID, productID: reqProductID } = req.params;
   const { linkProduct: reqLinkProduct, title: reqTitle, price: reqPrice } = req.body;
   try {
      const product = {
         productID: `prod-${uuid()}`,
         linkProduct: reqLinkProduct,
         title: reqTitle,
         price: reqPrice,
      };
      const productToUpdate = await VideoProduct.findOneAndUpdate(
         {videoID: reqVideoID, "products.productID": reqProductID},
         {"products.$": product },
         {new: true}
      );
      res.status(200).json(productToUpdate);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

router.delete('/:videoID/:productID', async (req, res) => {
   const { videoID: reqVideoID, productID: reqProductID } = req.params;
   try {
      const deleteProduct = await VideoProduct.findOneAndUpdate(
         {videoID: reqVideoID},
         {$pull: { products: { productID: reqProductID } }},
         {new: true}
      );
      res.send(deleteProduct);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

export default router;

