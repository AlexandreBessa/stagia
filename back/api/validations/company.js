import * as Yup from 'yup';

import FieldMessage from './fieldmessage';

import Company from '../models/Company';

const idValid = (id) => !(Number.isNaN(id)) && Number.isInteger(+id) && typeof id !== 'object';

module.exports = () => {
  const validations = {};

  validations.listCompanies = async (req) => {
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

  validations.findOneCompany = async (req) => {
    const errors = [];

    const { id } = req.params;

    const company = await Company.findByPk(id);
    if (!company) {
      errors.push(new FieldMessage('id', 'Não existe empresa com esse id'));
    }

    return errors;
  };

  validations.createCompany = async (req) => {
    const errors = [];

    const {
      cnpj,
    } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().strict().required('Campo Obrigatório'),
      cnpj: Yup.string().test('cnpj', 'Campo deve ter 14 para CNPJ', (value) => value && value.length === 14).required('Campo Obrigatório'),
      phone: Yup.string().strict().required('Campo Obrigatório'),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        errors.push(new FieldMessage(error.path, error.message));
      });
      return errors;
    }

    const company = await Company.findOne({ where: { cnpj } });
    if (company) {
      errors.push(new FieldMessage('cnpj', 'Empresa ja inserida no sistema'));
    }

    return errors;
  };

  validations.updateCompany = async (req) => {
    const errors = [];

    const { id } = req.params;
    const {
      cnpj,
    } = req.body;

    const company = await Company.findByPk(id);
    if (!company) {
      errors.push(new FieldMessage('id', 'Não existe empresa com esse id'));
      return errors;
    }

    const schema = Yup.object().shape({
      name: Yup.string().strict(),
      cnpj: Yup.string().test('cnpj', 'Campo deve ter 14 para CNPJ', (value) => {
        if (!value) return true;
        return value.length === 14;
      }),
      phone: Yup.string().strict(),
      active: Yup.boolean(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        errors.push(new FieldMessage(error.path, error.message));
      });
      return errors;
    }

    if (cnpj) {
      const company2 = await Company.findOne({ where: { cnpj } });
      if (company2 && company2.cnpj !== cnpj) {
        errors.push(new FieldMessage('cnpj', 'Empresa ja inserida no sistema'));
      }
    }

    return errors;
  };

  validations.changeStatusToActive = async (req) => {
    const errors = [];

    const { id } = req.params;

    const company = await Company.findByPk(id);
    if (!company) {
      errors.push(new FieldMessage('id', 'Não existe empresa com esse id'));
      return errors;
    }

    if (company.active) errors.push(new FieldMessage('active', 'Esss empresa já está ativa'));

    return errors;
  };

  validations.changeStatusToDeactivated = async (req) => {
    const errors = [];

    const { id } = req.params;

    const company = await Company.findByPk(id);
    if (!company) {
      errors.push(new FieldMessage('id', 'Não existe empresa com esse id'));
      return errors;
    }

    if (!company.active) errors.push(new FieldMessage('active', 'Essa empresa já está inativada'));

    return errors;
  };

  validations.deleteCompany = async (req) => {
    const errors = [];

    const { id } = req.params;

    const company = await Company.findByPk(id);
    if (!company) {
      errors.push(new FieldMessage('id', 'Não existe empresa com esse id'));
    }

    return errors;
  };

  return validations;
};
