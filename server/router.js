const router = require('express').Router();
const { getLetters } = require('./controllers/letterController');

//Photos
router.get('/letters', getLetters);

module.exports = router;
