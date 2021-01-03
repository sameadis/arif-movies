const express = require('express');
const genres = require('./routes/genres');
const home = require('./routes/home');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);
app.use('/', home);

app.listen(3000, () => console.log("Listening on port 3000..."));