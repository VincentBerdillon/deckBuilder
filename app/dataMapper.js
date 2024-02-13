const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },

  async getCard(cardId) {
    const query = "SELECT * FROM card WHERE card.id =$1";
    const result = await database.query(query, [cardId]);
    return result.rows[0];
  },

  async getCardByElement(cardEl) {
    if (cardEl != null){
      const query = "SELECT * FROM card WHERE card.element =$1";
      const result = await database.query(query, [cardEl]);
      return result.rows;
    } else {
      const query = "SELECT * FROM card WHERE card.element IS NULL";
      const result = await database.query(query);
      return result.rows;
    }
  },



};


module.exports = dataMapper;
