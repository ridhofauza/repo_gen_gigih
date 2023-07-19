const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('This is the index page');
});

app.get('/about', (req, res) => {
   res.send('This is the about page');
});

app.use((req, res) => {
   res.status(404).send('Page not found');
});

app.listen(3000, () => {
   console.log('Server running on port 3000');
});