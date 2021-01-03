const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect('mongodb://localhost/generes')
  .then(() => console.log("Connected to MonogoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

const genreSchema = new mongoose.Schema({
    name: String
    // enum: ['Action', 'Thriller', 'Romance', 'Horror', 'Drama']
});

const Genre = mongoose.model('Genre', genreSchema);

async function createGenre(name) {
    const genre = new Genre({
        name: name
    });

    const result = await genre.save();
    console.log(result);
}

// async function getGenre(name) {
//     const genre = await Genre.find({ name: name });
//     console.log(genre);
// }

// async function getGenres() {
//     genres = await Genre.find();
//     // console.log(genres);
// }

// createGenre('Action');
// createGenre('Romance');
// getGenre('Action');

router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.send(genres);
});

router.get('/:name', async (req, res) => {
    const genre = await Genre.find({ name: req.params.name });
    res.send(genre);
});

router.post('/', (req, res) => {
    const genre = req.body;
    createGenre(genre);
    res.send(genres);
});

router.put('/:id', (req, res) => {
    const newGenre = req.body;
    let idx;
    genres.some((g, i) => {
        idx = i;
        return g.id === parseInt(req.params.id);
    });
    genres[idx] = newGenre;
    res.send(genres);
});

router.delete('/:id', (req, res) => {
    let idx;
    genres.some((g, i) => {
        idx = i - 1;
        return g.id === parseInt(req.params.id);
    });
    genres.splice(idx, 1);
    res.send(genres);
});


module.exports = router;