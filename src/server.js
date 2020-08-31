const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const expressSwaggerGenerator = require('express-swagger-generator');
const routes = require('./routes/index');
const swagger = require('./swagger');

const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`-> ${err.message}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);
expressSwaggerGenerator(app)(swagger);

module.exports = app;
