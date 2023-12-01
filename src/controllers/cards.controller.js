const { extendedData } = require ("../constants");

function getCards(req, res) {
  res.status(200).send({
    data: extendedData,
  });
}

function getCard(req, res) {
  const { id } = req.params;
  res.status(200).send(extendedData[id - 1]);
}

function addCard(req, res) {
  const fullCard = req.body;

  const card = {...fullCard, id: extendedData.length + 1};
  extendedData.push(card);
  res.status(200).send(card);
}

module.exports = {
  getCards,
  getCard,
  addCard
};
