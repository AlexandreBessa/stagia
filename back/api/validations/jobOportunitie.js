import * as Yup from 'yup';
import FieldMessage from './fieldmessage';
import Company from '../models/Company';
import JobOportunity from '../models/JobOportunity';

function idValid(id) {
  return !(Number.isNaN(id)) && Number.isInteger(+id);
}

module.exports = () => {
  const validations = {};

  validations.listJobOportunities = async (req) => {
    const errors = [];
    const {
      page,
      per_page: perPage,
      active,
    } = req.query;

    if (perPage && !idValid(perPage)) {
      errors.push(new FieldMessage('per_page', 'Parametro deve ser do tipo inteiro'));
    }

    if (page && !idValid(page)) {
      errors.push(new FieldMessage('page', 'Parametro deve ser do tipo inteiro'));
    }

    if (active && !(active === 'true' || active === 'false')) {
      errors.push(new FieldMessage('active', 'Parametro só pode ser true ou false'));
    }

    return errors;
  };

  validations.findOneJobOportunitie = async (req) => {
    const errors = [];

    const { id } = req.params;
    if (!idValid(id)) {
      errors.push(new FieldMessage('id', 'Parametro deve ser do tipo inteiro'));
    }

    const jobOportunitie = await JobOportunity.findByPk(id);
    if (!jobOportunitie) {
      errors.push(new FieldMessage('id', 'Oportunidade de emprego inexistente'));
    }

    return errors;
  };

  validations.createJobOportunitie = async (req) => {
    const errors = [];
    const { company } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required('Campo Obrigatório'),
      description: Yup.string().required('Campo Obrigatório'),
      requirements: Yup.string().required(),
      salary: Yup.number(),
      company: Yup.object().shape({
        id: Yup.number().integer().required('Campo Obrigatório'),
      }).required('Campo Obrigatório'),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        errors.push(new FieldMessage(error.path, error.message));
      });
      return errors;
    }

    const companyInDatabase = await Company.findByPk(company.id);
    if (!companyInDatabase) {
      errors.push(new FieldMessage('company.id', 'Empresa não existe'));
      return errors;
    }

    if (!companyInDatabase.active) {
      errors.push(new FieldMessage('company.id', 'Empresa não esta inativa'));
    }

    return errors;
  };

  validations.updateJobOportunitie = async (req) => {
    const errors = [];
    const { id } = req.params;
    const { company } = req.body;

    if (!idValid(id)) {
      errors.push(new FieldMessage('id', 'Parametro deve ser do tipo inteiro'));
    }

    const jobOportunitie = await JobOportunity.findByPk(id);
    if (!jobOportunitie) {
      errors.push(new FieldMessage('id', 'Oportunidade de emprego inexistente'));
    }

    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      requirements: Yup.string().required(),
      salary: Yup.number(),
      active: Yup.boolean(),
      company: Yup.object().shape({
        id: Yup.number().integer(),
      }),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        errors.push(new FieldMessage(error.path, error.message));
      });
      return errors;
    }

    if (company) {
      const companyInDatabase = await Company.findByPk(company.id);
      if (!companyInDatabase) {
        errors.push(new FieldMessage('company.id', 'Empresa não existe'));
      }
    }

    return errors;
  };

  validations.changeStatusToActive = async (req) => {
    const errors = [];

    const { id } = req.params;

    const jobOportunity = await JobOportunity.findByPk(id);
    if (!jobOportunity) {
      errors.push(new FieldMessage('id', 'Não existe oportunidade de emprego com esse id'));
      return errors;
    }

    if (jobOportunity.active) errors.push(new FieldMessage('active', 'Essa oportunidade de emprego já está ativa'));

    return errors;
  };

  validations.changeStatusToDeactivated = async (req) => {
    const errors = [];

    const { id } = req.params;

    const jobOportunity = await JobOportunity.findByPk(id);
    if (!jobOportunity) {
      errors.push(new FieldMessage('id', 'Não existe oportunidade de emprego com esse id'));
      return errors;
    }

    if (!jobOportunity.active) errors.push(new FieldMessage('active', 'Essa oportunidade de emprego já está inativada'));

    return errors;
  };

  return validations;
};
