const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/card/:id', mainController.renderOneCard);

router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchCardByElement);

router.get('/deck', mainController.deckPage);
router.get('/add_deck/:id', mainController.addCard);
router.get('/delete_deck/:id', mainController.deleteCard);




module.exports = router;