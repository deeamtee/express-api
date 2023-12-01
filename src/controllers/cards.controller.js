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

module.exports = {
  getCards,
  getCard,
};
