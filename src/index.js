const express = require("express");
const { cardsRouter } = require('./routes/cards.js');
const cors = require('cors');

const PORT = 5000;

const app = express();

app.use(cors())
app.use('/api', cardsRouter)

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
