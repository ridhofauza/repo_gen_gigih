import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
   videoID: {
      required: true,
      type: String
   },
   productID: {
      required: true,
      type: String
   },
   linkProduct: {
      required: true,
      type: String
   },
   title: {
      required: true,
      type: String
   },
   price: {
      required: true,
      type: Number
   }
});

export default productSchema;