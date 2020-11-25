const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');
const cors = require('cors');

require('dotenv/config');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  app.use(cors());

  consign({ cwd: 'api' })
    .then('models')
    .then('validations')
    .then('services')
    .then('controllers')
    .into(app);

  return app;
};
