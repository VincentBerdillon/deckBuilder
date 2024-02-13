const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  deckPage: async (req, res) => {
    try {
    
      if(!req.session.deck){
        req.session.deck = [];
      }
      res.render('deck', {cardsDeck : req.session.deck})

    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  renderOneCard: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const card = await dataMapper.getCard(id);
      res.render("cardPage", {card});
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  addCard: async (req, res) => {
    try {
      
      const cardId = parseInt(req.params.id);
      const card = await dataMapper.getCard(cardId);

      if(!req.session.deck){
        req.session.deck =[];
      }

      const result = req.session.deck.some((deck) => deck.id===cardId);
      if (result===false && req.session.deck.length<5){
        req.session.deck.push(card);
      }
      res.redirect('/deck');
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  deleteCard: async (req, res) => {
    try {
      
      const cardId = parseInt(req.params.id);
      req.session.deck = req.session.deck.filter((deck) => Number(deck.id)!=cardId);
      res.redirect('/deck');

    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

};

module.exports = mainController;
