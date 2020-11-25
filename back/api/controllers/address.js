import config from 'config';

import ValidateExceptionns from '../exceptions/validate';

module.exports = (app) => {
  const controller = app.services.address;
  const validations = app.validations.address;

  const baseURL = `${config.get('base_url')}/address`;

  const baseValidationAndControllerCall = async (serviceName, req, res) => {
    const errors = await validations[serviceName](req, res);
    if (errors.length === 0) {
      controller[serviceName](req, res);
    } else {
      res.status(400).send(new ValidateExceptionns(400, 'Erro ao processar solicitação!', req.url, errors));
    }
  };

  app.get(`${baseURL}/states`, (req, res) => {
    controller.listStates(req, res);
  });

  app.get(`${baseURL}/states/:stateId/cities`, async (req, res) => {
    baseValidationAndControllerCall('listCitiesInState', req, res);
  });
};
