import Company from '../models/Company';

import paginationFormatter from './paginationFormatter';

module.exports = () => {
  const controller = {};

  controller.listCompanies = async (req, res) => {
    let {
      page = 1,
      per_page: perPage = 10,
    } = req.query;
    if (Number(page) <= 0) page = 1;
    if (Number(perPage) < 0) perPage = 10;

    const companies = await Company.findAndCountAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'addressId'],
      },
      limit: perPage,
      offset: (page - 1) * perPage,
    });

    const paginatedResults = paginationFormatter(
      companies,
      page,
      perPage,
      companies.count,
    );

    return res.status(200).send(paginatedResults);
  };

  controller.findOneCompany = async (req, res) => {
    const { id } = req.params;
    const company = await Company.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'addressId'],
      },
    });

    return res.status(200).send(company);
  };

  controller.createCompany = async (req, res) => {
    await Company.create({ ...req.body, active: true });

    return res.status(201).send();
  };

  controller.updateCompany = async (req, res) => {
    const { id } = req.params;
    const { ...data } = req.body;

    const company = await Company.findByPk(id);
    if (data) {
      company.update(data);
    }

    return res.status(200).send();
  };

  controller.changeStatusToActive = async (req, res) => {
    const { id } = req.params;

    const company = await Company.findByPk(id);
    company.update({ active: true });

    return res.status(200).send();
  };

  controller.changeStatusToDeactivated = async (req, res) => {
    const { id } = req.params;

    const company = await Company.findByPk(id);

    company.update({ active: false });

    return res.status(200).send();
  };

  controller.deleteCompany = async (req, res) => {
    const { id } = req.params;

    const company = await Company.findByPk(id);

    company.destroy();

    return res.status(204).send();
  };

  return controller;
};
