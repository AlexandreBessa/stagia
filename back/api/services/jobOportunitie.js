import Company from '../models/Company';

import JobOportunity from '../models/JobOportunity';

import paginationFormatter from './paginationFormatter';

module.exports = () => {
  const controller = {};

  controller.listJobOportunities = async (req, res) => {
    let {
      page = 1,
      per_page: perPage = 10,
    } = req.query;
    if (Number(page) <= 0) page = 1;
    if (Number(perPage) < 0) perPage = 10;

    const jobOportunities = await JobOportunity.findAndCountAll({
      order: [['id', 'ASC']],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'companyId'],
      },
      include: [
        {
          model: Company,
          as: 'company',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
    });

    const paginatedResults = paginationFormatter(
      jobOportunities,
      page,
      perPage,
      jobOportunities.count,
    );

    return res.status(200).send(paginatedResults);
  };

  controller.findOneJobOportunitie = async (req, res) => {
    const { id } = req.params;

    const jobOportunitie = await JobOportunity.findByPk(id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'companyId'],
      },
      include: [
        {
          model: Company,
          as: 'company',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
    });

    return res.status(200).send(jobOportunitie);
  };

  controller.createJobOportunitie = async (req, res) => {
    const { company } = req.body;

    await JobOportunity.create({
      ...req.body,
      companyId: company.id,
    });

    return res.status(201).send();
  };

  controller.updateJobOportunitie = async (req, res) => {
    const { id } = req.params;
    const { company, ...data } = req.body;

    const jobOportunity = await JobOportunity.findByPk(id);

    if (data) {
      jobOportunity.update(data);
    }

    if (company) {
      jobOportunity.update({ companyId: company.id });
    }

    return res.status(204).send();
  };

  controller.changeStatusToActive = async (req, res) => {
    const { id } = req.params;

    const jobOportunity = await JobOportunity.findByPk(id);
    jobOportunity.update({ active: true });

    return res.status(200).send();
  };

  controller.changeStatusToDeactivated = async (req, res) => {
    const { id } = req.params;

    const jobOportunity = await JobOportunity.findByPk(id);

    jobOportunity.update({ active: false });

    return res.status(200).send();
  };

  return controller;
};
