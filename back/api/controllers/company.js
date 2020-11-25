import config from 'config';

import ValidateExceptionns from '../exceptions/validate';

module.exports = (app) => {
  const controller = app.services.company;
  const validations = app.validations.company;

  const baseURL = `${config.get('base_url')}/companies`;

  const baseValidationAndControllerCall = async (serviceName, req, res) => {
    const errors = await validations[serviceName](req, res);
    if (errors.length === 0) {
      controller[serviceName](req, res);
    } else {
      res.status(400).send(new ValidateExceptionns(400, 'Erro ao processar solicitação!', req.url, errors));
    }
  };

  app.get(baseURL, (req, res) => {
    baseValidationAndControllerCall('listCompanies', req, res);
  });

  app.get(`${baseURL}/:id`, async (req, res) => {
    baseValidationAndControllerCall('findOneCompany', req, res);
  });

  app.post(`${baseURL}`, async (req, res) => {
    baseValidationAndControllerCall('createCompany', req, res);
  });

  app.put(`${baseURL}/:id`, async (req, res) => {
    baseValidationAndControllerCall('updateCompany', req, res);
  });

  app.put(`${baseURL}/:id/active`, async (req, res) => {
    baseValidationAndControllerCall('changeStatusToActive', req, res);
  });

  app.put(`${baseURL}/:id/deactivate`, async (req, res) => {
    baseValidationAndControllerCall('changeStatusToDeactivated', req, res);
  });

  app.delete(`${baseURL}/:id`, async (req, res) => {
    baseValidationAndControllerCall('deleteCompany', req, res);
  });
};
