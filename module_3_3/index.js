import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import movieRouter from './routes/movie.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
   extended: true
}));

app.use('/api/movie', movieRouter);

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
}); 

// DB CONN
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
   console.log(error);
});

database.once('connected', () => {
   console.log('Database Connected');
});