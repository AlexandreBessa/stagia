module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('countries', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }).then(() => queryInterface.bulkInsert('countries',
    [
      {
        name: 'Brasil',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ])),

  down: (queryInterface) => queryInterface.dropTable('countries'),
};
