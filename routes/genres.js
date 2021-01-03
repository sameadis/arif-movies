const express = require('express')
const router = express.Router();

const genres = [
    {
        name: 'Action',
        id: 1
    },
    {
        name: 'Romance',
        id: 2
    }
];

router.get('/', (req, res) => {
    res.send(genres);
});

router.get('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    res.send(genre);
});

router.post('/', (req, res) => {
    const genre = req.body;
    genres.push(genre);
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