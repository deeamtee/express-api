const cardsRouter = require('express').Router();
const { getCards, getCard, addCard } = require('../controllers/cards.controller.js');

cardsRouter.get('/cards', getCards);

cardsRouter.get('/cards/:id', getCard);

cardsRouter.post('/cards', addCard);

cardsRouter.delete('/cards/:id', () => {});

module.exports = { cardsRouter }