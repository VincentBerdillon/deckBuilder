const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },

  searchCardByElement: async (req, res) => {
    const element = req.query.element;
    const cardsWithElement = await dataMapper.getCardByElement(element);
    res.render('searchedCards', {cardsWithElement});
  },

};

module.exports = searchController;