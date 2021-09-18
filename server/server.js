const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./routes/route');
const errorController = require('./controllers/error');
var bodyParser = require('body-parser')

const app = express();

const PORT = 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Authorization", "Access-Control-Allow-Headers", "Origin","X-Requested-With", "Content-Type", "Accept");
  next();
});

dotenv.config();

app.use(bodyParser.json())

app.use('/api', route);

app.use(errorController.get404);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to db'));

app.listen(process.env.PORT || PORT);
