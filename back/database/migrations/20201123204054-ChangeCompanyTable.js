module.exports = {
  up: (queryInterface) => Promise.all([
    queryInterface.removeColumn('companies', 'address_id'),
    queryInterface.removeColumn('companies', 'email'),

  ]),
  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('companies', 'address_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'addresses', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }),
    queryInterface.addColumn('companies', 'email', Sequelize.STRING),
  ]),
};
