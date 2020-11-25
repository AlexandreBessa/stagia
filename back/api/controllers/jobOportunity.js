import config from 'config';

import ValidateExceptionns from '../exceptions/validate';

module.exports = (app) => {
  const controller = app.services.jobOportunitie;
  const validations = app.validations.jobOportunitie;

  const baseURL = `${config.get('base_url')}/job-oportunities`;

  const baseValidationAndControllerCall = async (serviceName, req, res) => {
    const errors = await validations[serviceName](req, res);
    if (errors.length === 0) {
      controller[serviceName](req, res);
    } else {
      res.status(400).send(new ValidateExceptionns(400, 'Erro ao processar solicitação!', req.url, errors));
    }
  };

  app.get(baseURL, (req, res) => {
    baseValidationAndControllerCall('listJobOportunities', req, res);
  });

  app.get(`${baseURL}/:id`, async (req, res) => {
    baseValidationAndControllerCall('findOneJobOportunitie', req, res);
  });

  app.post(`${baseURL}`, async (req, res) => {
    baseValidationAndControllerCall('createJobOportunitie', req, res);
  });

  app.put(`${baseURL}/:id`, async (req, res) => {
    baseValidationAndControllerCall('updateJobOportunitie', req, res);
  });

  app.put(`${baseURL}/:id/active`, async (req, res) => {
    baseValidationAndControllerCall('changeStatusToActive', req, res);
  });

  app.put(`${baseURL}/:id/deactivate`, async (req, res) => {
    baseValidationAndControllerCall('changeStatusToDeactivated', req, res);
  });
};
