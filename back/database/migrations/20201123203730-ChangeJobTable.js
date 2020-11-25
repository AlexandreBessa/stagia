module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('job_oportunities', 'duration_months'),
    queryInterface.addColumn('job_oportunities', 'requirements', Sequelize.STRING),

  ]),
  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('job_oportunities', 'duration_months', Sequelize.INTEGER),
    queryInterface.removeColumn('job_oportunities', 'requirements'),
  ]),
};
