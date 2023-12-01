const express = require("express");
const bodyParser = require('body-parser')
const { cardsRouter } = require('./routes/cards.js');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 5000;
const DB_URL = 'mongodb://127.0.0.1:27017/characters';

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use('/api', cardsRouter)

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
})

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
