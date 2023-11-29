const data = [
  { id: 1, name: "card 1" },
  { id: 2, name: "card 2" },
  { id: 3, name: "card 3" },
  { id: 4, name: "card 4" },
];

function getCards(req, res) {
  res.status(200).send({
    data,
  });
}

function getCard (req, res) {
    const { id } = req.params;
    res.status(200).send(data[id - 1])
}

module.exports = {
  getCards,
  getCard
};
