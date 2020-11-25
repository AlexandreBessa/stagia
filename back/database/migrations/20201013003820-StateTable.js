module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('states', {
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
    initials: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'countries', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }).then(() => queryInterface.bulkInsert('states', [
    {

      name: 'ACRE',
      initials: 'AC',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOAS',
      initials: 'AL',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMAZONAS',
      initials: 'AM',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMAPA',
      initials: 'AP',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAHIA',
      initials: 'BA',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEARA',
      initials: 'CE',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DISTRITO FEDERAL',
      initials: 'DF',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPIRITO SANTO',
      initials: 'ES',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIAS',
      initials: 'GO',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARANHAO',
      initials: 'MA',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINAS GERAIS',
      initials: 'MG',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATO GROSSO DO SUL',
      initials: 'MS',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATO GROSSO',
      initials: 'MT',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARA',
      initials: 'PA',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAIBA',
      initials: 'PB',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERNANBUCO',
      initials: 'PE',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIAUI',
      initials: 'PI',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANA',
      initials: 'PR',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DE JANEIRO',
      initials: 'RJ',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO GRANDE DO NORTE',
      initials: 'RN',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RONDONIA',
      initials: 'RO',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RORAIMA',
      initials: 'RR',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO GRANDE DO SUL',
      initials: 'RS',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CATARINA',
      initials: 'SC',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERGIPE',
      initials: 'SE',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PAULO',
      initials: 'SP',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOCANTINS',
      initials: 'TO',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])),

  down: (queryInterface) => queryInterface.dropTable('states'),
};
