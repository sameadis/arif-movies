const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Arif Movies', message: 'Welcome to Arif Movies'});
});

module.exports = router;