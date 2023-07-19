import express from 'express';
import router from './routes/app.js';

const app = express();
const port = 3000;
const routes = router;

app.use((req, res, next) => {
   res.set('Content-Type', 'application/json');
   next();
});

app.use(express.json());

// routes
app.use('/api', routes);

app.use((req, res) => {
   res.status(404).send({ message: 'Page not found' });
});

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
})