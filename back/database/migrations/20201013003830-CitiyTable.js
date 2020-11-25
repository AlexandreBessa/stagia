module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('cities', {
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
    state_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'states', key: 'id' },
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
  }).then(() => queryInterface.bulkInsert('cities', [
    {

      name: 'ACRELANDIA',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASSIS BRASIL',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILEIA',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUJARI',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPIXABA',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZEIRO DO SUL',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EPITACIOLANDIA',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FEIJO',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JORDAO',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANCIO LIMA',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANOEL URBANO',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARECHAL THAUMATURGO',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLACIDO DE CASTRO',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO ACRE',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO WALTER',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BRANCO',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RODRIGUES ALVES',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DO PURUS',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENA MADUREIRA',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR GUIOMARD',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TARAUACA',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XAPURI',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA BRANCA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANADIA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPIRACA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ATALAIA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DE SANTO ANTONIO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DE SAO MIGUEL',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BATALHA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELEM',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELO MONTE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCA DA MATA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRANQUINHA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACIMBINHAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJUEIRO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPESTRE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO ALEGRE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO GRANDE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAPI',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPELA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARNEIROS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHA PRETA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COITE DO NOIA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLONIA LEOPOLDINA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COQUEIRO SECO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORURIPE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRAIBAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DELMIRO GOUVEIA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS RIACHOS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA DE ALAGOAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FEIRA GRANDE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FELIZ DESERTO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLEXEIRAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GIRAU DO PONCIANO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBATEGUARA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGACI',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGREJA NOVA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHAPI',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACARE DOS HOMENS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACUIPE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPARATINGA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARAMATAIA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAQUIM GOMES',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUNDIA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUNQUEIRO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DA CANOA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMOEIRO DE ANADIA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACEIO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAJOR ISIDORO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAR VERMELHO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAGOGI',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAVILHA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARECHAL DEODORO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIBONDO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATA GRANDE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATRIZ DE CAMARAGIBE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MESSIAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINADOR DO NEGRAO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTEIROPOLIS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MURICI',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO LINO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHO D`AGUA DAS FLORES',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHO D`AGUA DO CASADO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHO D`AGUA GRANDE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIVENCA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO BRANCO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALESTINA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRA DOS INDIOS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAO DE ACUCAR',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARICONHA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARIPUEIRA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSO DE CAMARAGIBE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULO JACINTO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PENEDO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIACABUCU',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILAR',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDOBA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRANHAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO DAS TRINCHEIRAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO CALVO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO DE PEDRAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO REAL DO COLEGIO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEBRANGULO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO LARGO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROTEIRO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA DO NORTE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO IPANEMA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO MUNDAU',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BRAS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA LAJE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA TAPERA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIS DO QUITUNDE',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DOS CAMPOS',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DOS MILAGRES',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SATUBA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR RUI PALMEIRA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANQUE D`ARCA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARANA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEOTONIO VILELA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRAIPU',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO DOS PALMARES',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICOSA',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVARAES',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMATURA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAMA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANORI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APUI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ATALAIA DO NORTE',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AUTAZES',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARCELOS',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARREIRINHA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENJAMIN CONSTANT',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERURI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA DO RAMOS',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCA DO ACRE',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BORBA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAAPIRANGA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANUTAMA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAUARI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAREIRO',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAREIRO DA VARZEA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COARI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CODAJAS',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EIRUNEPE',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENVIRA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FONTE BOA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAJARA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HUMAITA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIXUNA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRANDUBA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITACOATIARA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMARATI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIRANGA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPURA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURUA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUTAI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LABREA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANACAPURU',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANAQUIRI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANAUS',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANICORE',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAUES',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NHAMUNDA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA OLINDA DO NORTE',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO AIRAO',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO ARIPUANA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARINTINS',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAUINI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE FIGUEIREDO',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO PRETO DA EVA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ISABEL DO RIO NEGRO',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO ICA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GABRIEL DA CACHOEIRA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PAULO DE OLIVENCA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO UATUMA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVES',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABATINGA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPAUA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEFE',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TONANTINS',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UARINI',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUCARA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUCURITUBA',
      state_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMAPA',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALCOENE',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUTIAS',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERREIRA GOMES',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAUBAL',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LARANJAL DO JARI',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAPA',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAZAGAO',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OIAPOQUE',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA BRANCA DO AMAPARI',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO GRANDE',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRACUUBA',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DO NAVIO',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TARTARUGALZINHO',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA DO JARI',
      state_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABAIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABARE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACAJUTIBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ADUSTINA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA FRIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AIQUARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOINHAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALCOBACA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALMADINA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMARGOSA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMELIA RODRIGUES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMERICA DOURADA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAGE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANDARAI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANDORINHA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGICAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGUERA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO CARDOSO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO GONCALVES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APORA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APUAREMA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACATU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAMARI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARATACA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARATUIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AURELINO LEAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIANOPOLIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIXA GRANDE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANZAE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DA ESTIVA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO CHOCA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO MENDES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO ROCHA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARREIRAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRO ALTO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELMONTE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELO CAMPO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BIRITINGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA NOVA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA DO TUPIM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DA LAPA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DA SERRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONINAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONITO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOQUIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOTUPORA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJOES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJOLANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BROTAS DE MACAUBAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRUMADO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUERAREMA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITIRAMA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAATIBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABACEIRAS DO PARAGUACU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACULE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAEM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAETANOS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAETITE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAFARNAUM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIRU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALDEIRAO GRANDE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMACAN',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMACARI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMAMU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO ALEGRE DE LOURDES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO FORMOSO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAPOLIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANARANA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAVIEIRAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDEAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDEIAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIDO SALES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANSANCAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANUDOS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPELA DO ALTO ALEGRE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPIM GROSSO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAIBAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAVELAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARDEAL DA SILVA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARINHANHA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASA NOVA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTRO ALVES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATOLANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATURAMA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTRAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHORROCHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CICERO DANTAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIPO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COARACI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COCOS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DA FEIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO ALMEIDA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO COITE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO JACUIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONDE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONDEUBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONTENDAS DO SINCORA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORACAO DE MARIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORDEIROS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORIBE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL JOAO SA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORRENTINA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COTEGIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRAVOLANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISOPOLIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTOPOLIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZ DAS ALMAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURACA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DARIO MEIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIAS D`AVILA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM BASILIO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM MACEDO COSTA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELISIO MEDRADO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENCRUZILHADA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENTRE RIOS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERICO CARDOSO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPLANADA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EUCLIDES DA CUNHA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EUNAPOLIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FATIMA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FEIRA DA MATA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FEIRA DE SANTANA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FILADELFIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FIRMINO ALVES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORESTA AZUL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSA DO RIO PRETO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GANDU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GAVIAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENTIO DO OURO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GLORIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GONGOGI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR LOMANTO JUNIOR',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR MANGABEIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAJERU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUANAMBI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARATINGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HELIOPOLIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IACU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIASSUCE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBICARAI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBICOARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBICUI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIPEBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIPITANGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIQUERA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRAPITANGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRAPUA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRATAIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBITIARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBITITA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBOTIRAMA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICHU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGAPORA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGRAPIUNA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUAI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILHEUS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHAMBUPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPECAETA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIAU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUPIARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAJUBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAMAIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAQUARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRECE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABELA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABERABA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABUNA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITACARE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAETE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGIBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGIMIRIM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUACU DA BAHIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJU DO COLONIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJUIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMARAJU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMARI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMBE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITANAGRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITANHEM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPARICA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPEBI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPETINGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPICURU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPITANGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAQUARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITARANTIM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATIM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITIRUCU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITIUBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITORORO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUACU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUBERA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IUIU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABORANDI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACARACI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACOBINA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUAQUARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARARI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANDAIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JEQUIE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JEREMOABO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JIQUIRICA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JITAUNA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO DOURADO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUAZEIRO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUCURUCU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUSSARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUSSARI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUSSIAPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAFAIETE COUTINHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA REAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEDAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEDINHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEDO DO TABOCAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAMARAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAPAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAURO DE FREITAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LENCOIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LICINIO DE ALMEIDA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIVRAMENTO DE NOSSA SENHORA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAJUBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPEVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACARANI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAUBAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACURURE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MADRE DE DEUS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAETINGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAIQUINIQUE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAIRI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MALHADA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MALHADA DE PEDRAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANOEL VITORINO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANSIDAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARACAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAGOGIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCIONILIO SOUZA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MASCOTE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATA DE SAO JOAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATINA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MEDEIROS NETO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIGUEL CALMON',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MILAGRES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANGABA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANTE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE SANTO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORPARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO DO CHAPEU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORTUGABA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUCUGE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUCURI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MULUNGU DO MORRO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUNDO NOVO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUNIZ FERREIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUQUEM DE SAO FRANCISCO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MURITIBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUTUIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZARE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NILO PECANHA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NORDESTINA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CANAA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA FATIMA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA IBIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ITARANA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA REDENCAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA SOURE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA VICOSA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO HORIZONTE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO TRIUNFO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLINDINA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIVEIRA DOS BREJINHOS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURICANGAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OUROLANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMAS DE MONTE ALTO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAMIRIM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARATINGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARIPIRANGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAU BRASIL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULO AFONSO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PE DE SERRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO ALEXANDRE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIATA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILAO ARCADO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDAI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDOBACU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINTADAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAI DO NORTE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRIPA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRITIBA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTINO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCOES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POJUCA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTO NOVO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO SEGURO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POTIRAGUA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRADO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE DUTRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE JANIO QUADROS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE TANCREDO NEVES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEIMADAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIJINGUE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIXABEIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAFAEL JAMBEIRO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REMANSO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RETIROLANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHAO DAS NEVES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHAO DO JACUIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO DE SANTANA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRA DO AMPARO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRA DO POMBAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO DO LARGO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DE CONTAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DO ANTONIO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DO PIRES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO REAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RODELAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUY BARBOSA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALINAS DA MARGARIDA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALVADOR',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BRIGIDA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ CABRALIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DA VITORIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA INES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DA VITORIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DE CASSIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TERESINHA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTALUZ',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANOPOLIS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO AMARO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DE JESUS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ESTEVAO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DESIDERIO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX DO CORIBE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO CONDE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GABRIEL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DOS CAMPOS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA VITORIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO JACUIPE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DAS MATAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO PASSE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPEACU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SATIRO DIAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAUBARA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAUDE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEABRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEBASTIAO LARANJEIRAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENHOR DO BONFIM',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENTO SE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DO RAMALHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DOURADA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA PRETA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRINHA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERROLANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIMOES FILHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SITIO DO MATO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SITIO DO QUINTO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOBRADINHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOUTO SOARES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABOCAS DO BREJO VELHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANHACU',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANQUE NOVO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANQUINHO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPEROA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPIRAMUTA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEIXEIRA DE FREITAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEODORO SAMPAIO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEOFILANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEOLANDIA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA NOVA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TREMEDAL',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUCANO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UAUA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBAIRA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBAITABA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBATA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UIBAI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMBURANAS',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URANDI',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUCUCA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UTINGA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALENCA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALENTE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA DA ROCA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA DO POCO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA NOVA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEDO',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERA CRUZ',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VEREDA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA DA CONQUISTA',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WAGNER',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WANDERLEY',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WENCESLAU GUIMARAES',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XIQUE-XIQUE',
      state_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABAIARA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACARAPE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACARAU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACOPIARA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AIUABA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALCANTARAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTANEIRA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO SANTO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMONTADA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONINA DO NORTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APUIARES',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AQUIRAZ',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACATI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACOIABA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARENDA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARIPE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARATUBA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARNEIROZ',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASSARE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AURORA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIXIO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANABUIU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARBALHA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARREIRA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARROQUINHA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BATURITE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BEBERIBE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA CRUZ',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VIAGEM',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO SANTO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMOCIM',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS SALES',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANINDE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPISTRANO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIDADE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIRE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIRIACU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIUS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARNAUBAL',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASCAVEL',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATARINA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATUNDA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAUCAIA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEDRO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAVAL',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHORO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHOROZINHO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COREAU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRATEUS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRATO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CROATA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZ',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DEPUTADO IRAPUAN PINHEIRO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERERE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EUSEBIO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FARIAS BRITO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORQUILHA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTALEZA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTIM',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRECHEIRINHA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENERAL SAMPAIO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRACA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRANJA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRANJEIRO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GROAIRAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAIUBA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARACIABA DO NORTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAMIRANGA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HIDROLANDIA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HORIZONTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBARETAMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIAPINA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBICUITINGA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICAPUI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUATU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDEPENDENCIA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPAPORANGA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPAUMIRIM',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUEIRAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRACEMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAUCUBA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAICABA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAITINGA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPAGE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIPOCA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIUNA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAREMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATIRA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARETAMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARIBARA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARIBE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARUANA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JIJOCA DE JERICOACOARA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUAZEIRO DO NORTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUCAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAVRAS DA MANGABEIRA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMOEIRO DO NORTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MADALENA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARACANAU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARANGUAPE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARTINOPOLE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MASSAPE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAURITI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MERUOCA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MILAGRES',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MILHA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRAIMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MISSAO VELHA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOMBACA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONSENHOR TABOSA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORADA NOVA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORAUJO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRINHOS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUCAMBO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MULUNGU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA OLINDA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA RUSSAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO ORIENTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OCARA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OROS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACAJUS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACATUBA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACOTI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACUJA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALHANO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMACIA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARACURU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAIPABA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAMBU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAMOTI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA BRANCA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PENAFORTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PENTECOSTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEREIRO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDORETAMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIQUET CARNEIRO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRES FERREIRA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORANGA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTEIRAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POTENGI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POTIRETAMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUITERIANOPOLIS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIXADA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIXELO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIXERAMOBIM',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIXERE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REDENCAO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RERIUTABA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUSSAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SABOEIRO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALITRE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA QUITERIA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO ACARAU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO CARIRI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENEDITO',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO AMARANTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO JAGUARIBE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIS DO CURU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR POMPEU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR SA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOBRAL',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOLONOPOLE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABULEIRO DO NORTE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAMBORIL',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TARRAFAS',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAUA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEJUCUOCA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIANGUA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRAIRI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURURU',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBAJARA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMARI',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMIRIM',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUBURETAMA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUOCA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARJOTA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA ALEGRE',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICOSA DO CEARA',
      state_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILIA',
      state_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AFONSO CLAUDIO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA DOCE DO NORTE',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUIA BRANCA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALEGRE',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALFREDO CHAVES',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO RIO NOVO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANCHIETA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APIACA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACRUZ',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ATILIO VIVACQUA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIXO GUANDU',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DE SAO FRANCISCO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA ESPERANCA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO NORTE',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJETUBA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRO DE ITAPEMIRIM',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIACICA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTELO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLATINA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DA BARRA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO CASTELO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINO DE SAO LOURENCO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOMINGOS MARTINS',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DORES DO RIO PRETO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ECOPORANGA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FUNDAO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUACUI',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAPARI',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBATIBA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRACU',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBITIRAMA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICONHA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRUPI',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUACU',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPEMIRIM',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITARANA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IUNA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARE',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JERONIMO MONTEIRO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO NEIVA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LARANJA DA TERRA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LINHARES',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANTENOPOLIS',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARATAIZES',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARECHAL FLORIANO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARILANDIA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIMOSO DO SUL',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTANHA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUCURICI',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUNIZ FREIRE',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUQUI',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA VENECIA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PANCAS',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO CANARIO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHEIROS',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIUMA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTO BELO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE KENNEDY',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BANANAL',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO NOVO DO SUL',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LEOPOLDINA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DE JETIBA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TERESA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO NORTE',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GABRIEL DA PALHA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO CALCADO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MATEUS',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO ROQUE DO CANAA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOORETAMA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM ALTA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VENDA NOVA DO IMIGRANTE',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIANA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA PAVAO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA VALERIO',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA VELHA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA',
      state_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABADIA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABADIANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACREUNA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ADELANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA FRIA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA LIMPA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS LINDAS DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALEXANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALOANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO HORIZONTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO PARAISO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVORADA DO NORTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMARALINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMERICANO DO BRASIL',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMORINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANHANGUERA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANICUNS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APARECIDA DE GOIANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APARECIDA DO RIO DOCE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APORE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGARCAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGOIANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUAPAZ',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARENOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARUANA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AURILANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AVELINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALIZA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRO ALTO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JARDIM DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONFINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAZABRANTES',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRITANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITI ALEGRE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITI DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABECEIRAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA ALTA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DOURADA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIAPONIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALDAS NOVAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALDAZINHA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPESTRE DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINACU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINORTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO ALEGRE DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS BELOS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS VERDES',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO DO RIO VERDE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTELANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATALAO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATURAI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAVALCANTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERES',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEZARINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADAO DO CEU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIDADE OCIDENTAL',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COCALZINHO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLINAS DO SUL',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORREGO DO OURO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORUMBA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORUMBAIBA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTALINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTIANOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRIXAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CROMINIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUMARI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DAMIANOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DAMOLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DAVINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIORAMA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINOPOLIS DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOVERLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EDEALINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EDEIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA DO NORTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAZENDA NOVA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FIRMINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORES DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANAPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANDIRA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANESIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANIRA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIATUBA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOUVELANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAITA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANI DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARINOS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HEITORAI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HIDROLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HIDROLINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IACIARA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INACIOLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDIARA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHUMAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPAMERI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPORA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ISRAELANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABERAI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUARI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUARU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPACI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIRAPUA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPURANGA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITARUMA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAUCU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUMBIARA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVOLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANDAIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARAGUA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATAI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAUPACI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JESUPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOVIANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUSSARA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEOPOLDO DE BULHOES',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUZIANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAIRIPOTABA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAMBAI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARA ROSA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARZAGAO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATRINCHA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAURILANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIMOSO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINACU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINEIROS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOIPORA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTES CLAROS DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTIVIDIU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTIVIDIU DO NORTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRINHOS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO AGUDO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOSSAMEDES',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOZARLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUNDO NOVO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUTUNOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZARIO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NEROPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NIQUELANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA AMERICA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA AURORA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CRIXAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA GLORIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA IGUACU DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ROMA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA VENEZA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO BRASIL',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO GAMA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO PLANALTO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORIZONA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO VERDE DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OUVIDOR',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PADRE BERNARDO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALESTINA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRAS DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMELO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PANAMA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAIGUARA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAUNA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEROLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PETROLINA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILAR DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRACANJUBA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRANHAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRENOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRES DO RIO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTALINA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORANGATU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTEIRAO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTELANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POSSE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PROFESSOR JAMIL',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIRINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIALMA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIANAPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO QUENTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO VERDE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUBIATABA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANCLERLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FE DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA HELENA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ISABEL',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DO ARAGUAIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DO NOVO DESTINO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZINHA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DA BARRA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO DESCOBERTO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO D`ALIANCA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRACA ARANHA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA PARAUNA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIS DE MONTES BELOS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIZ DO NORTE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO ARAGUAIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO PASSA QUATRO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PATRICIO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SIMAO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR CANEDO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRANOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIMOLANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SITIO DABADIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARAL DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERESINA DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEREZOPOLIS DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES RANCHOS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRINDADE',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TROMBAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURVANIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURVELANDIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UIRAPURU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUACU',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUANA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUTAI',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALPARAISO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARJAO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIANOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICENTINOPOLIS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA BOA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA PROPICIO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'S. LUIS MONTES BELOS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'STO ANTONIO DE GOIAS',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL ARAGUAIA',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO LIMPO',
      state_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARAPE GRANDE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACAILANDIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AFONSO CUNHA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA DOCE DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALCANTARA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALDEIAS ALTAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTAMIRA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO ALEGRE DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO ALEGRE DO PINDARE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO PARNAIBA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMAPA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMARANTE DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAJATUBA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAPURUS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APICUM-ACU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUANA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAIOSES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAME',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARI',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AXIXA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BACABAL',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BACABEIRA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BACURI',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BACURITUBA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALSAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO DE GRAJAU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO CORDA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARREIRINHAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELAGUA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENEDITO LEITE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BEQUIMAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERNARDO DO MEARIM',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA DO GURUPI',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JARDIM',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DAS SELVAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM LUGAR',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO DE AREIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITI',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITI BRAVO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITICUPU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITIRANA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA GRANDE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJAPIO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJARI',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPESTRE DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIDO MENDES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANTANHEDE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPINZAL DO NORTE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAROLINA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARUTAPERA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAXIAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEDRAL',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTRAL DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTRO DO GUILHERME',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTRO NOVO DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADINHA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIDELANDIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CODO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COELHO NETO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLINAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO LAGO-ACU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COROATA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURURUPU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DAVINOPOLIS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM PEDRO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DUQUE BACELAR',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPERANTINOPOLIS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTREITO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FEIRA NOVA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNANDO FALCAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSA DA SERRA NEGRA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTALEZA DOS NOGUEIRAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTUNA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GODOFREDO VIANA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GONCALVES DIAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR ARCHER',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR EDISON LOBAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR EUGENIO BARROS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR LUIZ ROCHA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR NEWTON BELLO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR NUNES FREIRE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAJAU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUIMARAES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HUMBERTO DE CAMPOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICATU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARAPE DO MEIO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMPERATRIZ',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAIPAVA DO GRAJAU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPECURU MIRIM',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITINGA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATOBA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JENIPAPO DOS VIEIRAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO LISBOA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSELANDIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUNCO DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGO DA PEDRA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGO DO JUNCO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGO DOS RODRIGUES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGO VERDE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO MATO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA GRANDE DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEADO NOVO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMA CAMPOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LORETO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUIS DOMINGUES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAGALHAES DE ALMEIDA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARACACUME',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAJA DO SENA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARANHAOZINHO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATA ROMA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATINHA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATOES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATOES DO NORTE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MILAGRES DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRADOR',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANDA DO NORTE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRINZAL',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONCAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTES ALTOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORROS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NINA RODRIGUES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA COLINAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA IORQUE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA OLINDA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHO D`AGUA DAS CUNHAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLINDA NOVA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACO DO LUMIAR',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRANDIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAIBANO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARNARAMA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSAGEM FRANCA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASTOS BONS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULINO NEVES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULO RAMOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDREIRAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO DO ROSARIO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PENALVA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERI MIRIM',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERITORO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDARE-MIRIM',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHEIRO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIO XII',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAPEMAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCAO DE PEDRAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO FRANCO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO RICO DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE DUTRA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE JUSCELINO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE MEDICI',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE SARNEY',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE VARGAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRIMEIRA CRUZ',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAPOSA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBAMAR FIQUENE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSARIO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAMBAIBA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FILOMENA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA HELENA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA INES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA DO PARUA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA QUITERIA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO AMARO DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DOS LOPES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENEDITO DO RIO PRETO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BERNARDO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO AZEITAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX DE BALSAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO BREJAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO BATISTA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO CARU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO PARAISO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO SOTER',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DOS PATOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DE RIBAMAR',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DOS BASILIOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIS GONZAGA DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MATEUS DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DA AGUA BRANCA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DOS CRENTES',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO RAIMUNDO DAS MANGABEIRAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO RAIMUNDO DO DOCA BEZERRA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO ROBERTO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VICENTE FERRER',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SATUBINHA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR ALEXANDRE COSTA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR LA ROCQUE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITIZEIRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRANO DO MARANHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SITIO NOVO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUCUPIRA DO NORTE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUCUPIRA DO RIACHAO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TASSO FRAGOSO',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMBIRAS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMON',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRIZIDELA DO VALE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUFILANDIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUNTUM',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURIACU',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURILANDIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUTOIA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URBANO SANTOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM GRANDE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIANA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA NOVA DOS MARTIRIOS',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA DO MEARIM',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORINO FREIRE',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ZE DOCA',
      state_id: 10,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABADIA DOS DOURADOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABAETE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABRE CAMPO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACAIACA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACUCENA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA BOA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA COMPRIDA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUANIL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS FORMOSAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS VERMELHAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AIMORES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AIURUOCA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALBERTINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALEM PARAIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALFENAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALFREDO VASCONCELOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALMENARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALPERCATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALPINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTEROSA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO CAPARAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO JEQUITIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO RIO DOCE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVARENGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVORADA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMPARO DO SERRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANDRADAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANDRELANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGELANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO DIAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO PRADO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACITABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACUAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUARI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARANTINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPONGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPORA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPUA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAUJOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAXA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARCEBURGO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARCOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREADO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARGIRITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARICANDUVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARINOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASTOLFO DUTRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ATALEIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AUGUSTO DE LIMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAEPENDI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALDIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAMBUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANDEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANDEIRA DO SUL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPIRAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO DE COCAIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO DE MONTE ALTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARBACENA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA LONGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARROSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELMIRO BRAGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELO HORIZONTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELO ORIENTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELO VALE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERILO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERIZAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERTOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BETIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BIAS FORTES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BICAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BIQUINHAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA ESPERANCA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCAINA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCAIUVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM DESPACHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JARDIM DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DA PENHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO AMPARO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO GALHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM REPOUSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM SUCESSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONFIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONFINOPOLIS DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONITO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BORDA DA MATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOTELHOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOTUMIRIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAS PIRES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILANDIA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILIA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAUNAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRUMADINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUENO BRANDAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUENOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUGRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABECEIRA GRANDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABO VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DA PRATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DE PAJEU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DOURADA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAETANOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAETE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIANA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJURI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALDAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMACHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMANDUCAIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBUQUIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPANARIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPANHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPESTRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINA VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO AZUL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO BELO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO DO MEIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO FLORIDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS ALTOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS GERAIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANA VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDEIAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANTAGALO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPARAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPELA NOVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPELINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPETINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPIM BRANCO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITAO ANDRADE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITAO ENEAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITOLIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPUTIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARANAIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARANDAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARANGOLA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARATINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARBONITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAREACU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARLOS CHAGAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMESIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO DA CACHOEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO DA MATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO DO CAJURU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO DO PARANAIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO DO RIO CLARO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMOPOLIS DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARNEIRINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARRANCAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARVALHOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARVALHOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASA GRANDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASCALHO RICO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASSIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATAGUASES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATAS ALTAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATAS ALTAS DA NORUEGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATUJI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATUTI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAXAMBU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEDRO DO ABAETE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTRAL DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTRALINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHACARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHALE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADA DO NORTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADA GAUCHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHIADOR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIPOTANEA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CLARAVAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CLARO DOS POCOES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CLAUDIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COIMBRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLUNA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COMENDADOR GOMES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COMERCINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DA APARECIDA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DA BARRA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DAS ALAGOAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DAS PEDRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DE IPANEMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO MATO DENTRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO PARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO RIO VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DOS OUROS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONEGO MARINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONFINS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONGONHAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONGONHAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONGONHAS DO NORTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONQUISTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONSELHEIRO LAFAIETE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONSELHEIRO PENA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONSOLACAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONTAGEM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COQUEIRAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORACAO DE JESUS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORDISBURGO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORDISLANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORINTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COROACI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COROMANDEL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL FABRICIANO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL MURTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL PACHECO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL XAVIER CHAVES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORREGO DANTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORREGO DO BOM JESUS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORREGO FUNDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORREGO NOVO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COUTO DE MAGALHAES DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISOLITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTAIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTALIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTIANO OTONI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUCILANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZEIRO DA FORTALEZA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZILIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUPARAQUE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRAL DE DENTRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURVELO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DATAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DELFIM MOREIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DELFINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DELTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DESCOBERTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DESTERRO DE ENTRE RIOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DESTERRO DO MELO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIAMANTINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIOGO DE VASCONCELOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIONISIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINESIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINO DAS LARANJEIRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINOLANDIA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVISA ALEGRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVISA NOVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVISOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM BOSCO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM CAVATI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM JOAQUIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM SILVERIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM VICOSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DONA EUSEBIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DORES DE CAMPOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DORES DE GUANHAES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DORES DO INDAIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DORES DO TURVO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DORESOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOURADOQUARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DURANDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELOI MENDES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENGENHEIRO CALDAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENGENHEIRO NAVARRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENTRE FOLHAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENTRE RIOS DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERVALIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESMERALDAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPERA FELIZ',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPINOSA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPIRITO SANTO DO DOURADO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTIVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA DALVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA DO INDAIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA DO SUL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EUGENOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EWBANK DA CAMARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EXTREMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FARIA LEMOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FELICIO DOS SANTOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FELISBURGO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FELIXLANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNANDES TOURINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERROS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERVEDOURO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORESTAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMIGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTALEZA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTUNA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO BADARO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO DUMONT',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO SA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREI GASPAR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREI INOCENCIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREI LAGONEGRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRONTEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRONTEIRA DOS VALES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRUTA DE LEITE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRUTAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FUNILANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GALILEIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GAMELEIRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GLAUCILANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIABEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GONCALVES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GONZAGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOUVEIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR VALADARES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAO MOGOL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRUPIARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUANHAES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARACIABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARACIAMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANESIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARDA-MOR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAXUPE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUIDOVAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUIMARANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUIRICEMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GURINHATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HELIODORA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IAPU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBERTIOGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRACATU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRACI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRITE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBITIURA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBITURUNA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICARAI DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARAPE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARATINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUATAMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IJACI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILICINEA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMBE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INCONFIDENTES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDAIABIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDIANOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INGAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHAPIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHAUMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INIMUTABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPANEMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPATINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIACU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUIUNA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAI DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABIRINHA DE MANTENA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABIRITO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITACAMBIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITACARAMBI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAIPE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJUBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMARANDIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMARATI DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMBACURI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMBE DO MATO DENTRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMOGI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMONTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITANHANDU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITANHOMI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAOBIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPAGIPE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPECERICA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATIAIUCU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAU DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAUNA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAVERAVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUETA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUIUTABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUMIRIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITURAMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUTINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABOTICATUBAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACINTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACUTINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARACU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAMPRUCA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANAUBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANUARIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPARAIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPONVAR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JECEABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JENIPAPO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JEQUERI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JEQUITAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JEQUITIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JEQUITINHONHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JESUANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAIMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOANESIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO MONLEVADE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO PINHEIRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAQUIM FELICIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JORDANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSE GONCALVES DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSE RAYDAN',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSENOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUATUBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUIZ DE FORA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURAMENTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURUAIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUVENILIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LADAINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGAMAR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DA PRATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DOS PATOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DOURADA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA FORMOSA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA GRANDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA SANTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAMBARI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAMIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LARANJAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LASSANCE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAVRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEANDRO FERREIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEME DO PRADO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEOPOLDINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIBERDADE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMA DUARTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMEIRA DO OESTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LONTRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUISBURGO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUISLANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUMINARIAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUZ',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACHACALIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACHADO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MADRE DE DEUS DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MALACACHETA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAMONAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANHUACU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANHUMIRIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANTENA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAR DE ESPANHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAVILHAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIA DA FE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIANA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARILAC',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIO CAMPOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIPA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARLIERIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARMELOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARTINHO CAMPOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARTINS SOARES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATA VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATERLANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATEUS LEME',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATHIAS LOBATO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATIAS BARBOSA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATIAS CARDOSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATIPO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATO VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATOZINHOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATUTINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MEDEIROS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MEDINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MENDES PIMENTEL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MERCES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MESQUITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINAS NOVAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINDURI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRABELA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRADOURO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRAVANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOEDA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOEMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONJOLOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONSENHOR PAULO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTALVANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE AZUL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE BELO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE CARMELO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE FORMOSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE SANTO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE SIAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTES CLAROS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTEZUMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORADA NOVA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO DA GARCA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO DO PILAR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUNHOZ',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MURIAE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUTUM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUZAMBINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NACIP RAYDAN',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NANUQUE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAQUE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NATALANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NATERCIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZARENO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NEPOMUCENO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NINHEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA BELEM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ERA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA LIMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA MODICA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PONTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PORTEIRINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA RESENDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA SERRANA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA UNIAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO CRUZEIRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO ORIENTE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVORIZONTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLARIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHOS-D`AGUA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIMPIO NORONHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIVEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIVEIRA FORTES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ONCA DE PITANGUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORATORIOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORIZANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO BRANCO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO FINO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO PRETO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO VERDE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PADRE CARVALHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PADRE PARAISO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAI PEDRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAINEIRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAINS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAIVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAPAGAIOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARACATU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAGUACU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAISOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAOPEBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSA QUATRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSA TEMPO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSA-VINTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSABEM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATOS DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATROCINIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATROCINIO DO MURIAE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULA CANDIDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULISTAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAVAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PECANHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA AZUL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA BONITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA DO ANTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA DO INDAIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA DOURADA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRALVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRAS DE MARIA DA CRUZ',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO LEOPOLDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO TEIXEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEQUERI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEQUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERDIGAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERDIZES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERDOES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERIQUITO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PESCADOR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIAU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIEDADE DE CARATINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIEDADE DE PONTE NOVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIEDADE DO RIO GRANDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIEDADE DOS GERAIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIMENTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINGO-D`AGUA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINTOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRACEMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAJUBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRANGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRANGUCU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRANGUINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAPETINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAPORA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAUBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PITANGUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIUMHI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANURA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO FUNDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCOS DE CALDAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCRANE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POMPEU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE NOVA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTO CHIQUE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTO DOS VOLANTES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTEIRINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO FIRME',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POUSO ALEGRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POUSO ALTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRADOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRATAPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRATINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE BERNARDES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE JUSCELINO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE KUBITSCHEK',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE OLEGARIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRUDENTE DE MORAIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUARTEL GERAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUELUZITO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAPOSOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAUL SOARES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RECREIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REDUTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESENDE COSTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESPLENDOR',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESSAQUINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHINHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO DOS MACHADOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO DAS NEVES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO VERMELHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO ACIMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO CASCA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DO PRADO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DOCE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO ESPERA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO MANSO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO NOVO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO PARANAIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO PARDO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO PIRACICABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO POMBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO PRETO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO VERMELHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RITAPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROCHEDO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RODEIRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROMARIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSARIO DA LIMEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUBELITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUBIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SABARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SABINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SACRAMENTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO DA DIVISA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA DO LESTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA DO MONTE VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA DO TUGURIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DE SALINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DO ESCALVADO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA EFIGENIA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA HELENA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA JULIANA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARGARIDA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DE ITABIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DO SALTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DO SUACUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DE CALDAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DE IBITIPOCA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DE JACUTINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DO ITUETO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DO SAPUCAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DA SERRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA VITORIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DA VARGEM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DE CATAGUASES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DE PIRAPAMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO DESERTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO GARAMBEU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO JACARE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO MANHUACU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO PARAISO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO RIACHO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DOS MONTES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO AMPARO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO AVENTUREIRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO GRAMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO ITAMBE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARABA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO JACINTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO MONTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO RETIRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO RIO ABAIXO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO HIPOLITO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTOS DUMONT',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO ABADE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BRAS DO SUACUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DAS DORES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO PRATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DE PAULA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DE SALES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO GLORIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GERALDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GERALDO DA PIEDADE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GERALDO DO BAIXIO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO ABAETE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO PARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO RIO ABAIXO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO RIO PRETO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO SAPUCAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GOTARDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO BATISTA DO GLORIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA LAGOA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA MATA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA PONTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DAS MISSOES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DEL REI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO MANHUACU',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO MANTENINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO ORIENTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO PACUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO PARAISO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO EVANGELISTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO NEPOMUCENO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAQUIM DE BICAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA BARRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA LAPA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA SAFIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA VARGINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO ALEGRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO DIVINO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO GOIABAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO JACURI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO MANTIMENTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LOURENCO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO ANTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DA UNIAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO SUACUI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DOS FERROS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO ROMAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO ROQUE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DA BELA VISTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DA VARGEM ALEGRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO ANTA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO MARANHAO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO OESTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO PARAISO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO RIO PRETO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO RIO VERDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO THOME DAS LETRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO TIAGO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO TOMAS DE AQUINO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VICENTE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPUCAI-MIRIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SARDOA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SARZEDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEM-PEIXE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR AMARAL',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR CORTES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR FIRMINO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR JOSE BENTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR MODESTINO GONCALVES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENHORA DE OLIVEIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENHORA DO PORTO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENHORA DOS REMEDIOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERICITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERITINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA AZUL DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DA SAUDADE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DO SALITRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DOS AIMORES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRANOPOLIS DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRANOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SETE LAGOAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SETUBINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVEIRANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVIANOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIMAO PEREIRA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIMONESIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOBRALIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOLEDADE DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABULEIRO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAIOBEIRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPARUBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARACU DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TARUMIRIM',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEIXEIRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEOFILO OTONI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMOTEO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIRADENTES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIROS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOCANTINS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOCOS DO MOJI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOLEDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOMBOS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES CORACOES',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES MARIAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES PONTAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUMIRITINGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPACIGUARA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURMALINA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURVOLANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBAPORANGA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBERABA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBERLANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMBURATIBA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNAI',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUANA DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUCANIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUCUIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM ALEGRE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM BONITA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM GRANDE DO RIO PARDO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARJAO DE MINAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA DA PALMA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZELANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VAZANTE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERDELANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VEREDINHA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERISSIMO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERMELHO NOVO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VESPASIANO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICOSA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIEIRAS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIRGEM DA LAPA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIRGINIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIRGINOPOLIS',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIRGOLANDIA',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VISCONDE DO RIO BRANCO',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VOLTA GRANDE',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WENCESLAU BRAZ',
      state_id: 11,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA CLARA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALCINOPOLIS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMAMBAI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANASTACIO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAURILANDIA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGELICA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO JOAO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APARECIDA DO TABOADO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AQUIDAUANA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAL MOREIRA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANDEIRANTES',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BATAGUASSU',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BATAIPORA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BODOQUENA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONITO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILANDIA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAARAPO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMAPUA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO GRANDE',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARACOL',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASSILANDIA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADAO DO SUL',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORGUINHO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL SAPUCAIA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORUMBA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COSTA RICA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COXIM',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DEODAPOLIS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS IRMAOS DO BURITI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOURADINA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOURADOS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELDORADO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FATIMA DO SUL',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GLORIA DE DOURADOS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUIA LOPES DA LAGUNA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUATEMI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INOCENCIA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPORA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAQUIRAI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVINHEMA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPORA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARAGUARI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATEI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUTI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LADARIO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGUNA CARAPA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARACAJU',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANDA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUNDO NOVO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAVIRAI',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NIOAQUE',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ALVORADA DO SUL',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ANDRADINA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO HORIZONTE DO SUL',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAIBA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANHOS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO GOMES',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTA PORA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO MURTINHO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBAS DO RIO PARDO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BRILHANTE',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO NEGRO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO VERDE DE MATO GROSSO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROCHEDO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DO PARDO',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GABRIEL DO OESTE',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SELVIRIA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SETE QUEDAS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIDROLANDIA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SONORA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TACURU',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARUSSU',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERENOS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES LAGOAS',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICENTINA',
      state_id: 12,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACORIZAL',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA BOA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTA FLORESTA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO ARAGUAIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO BOA VISTA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO GARCAS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO PARAGUAI',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO TAQUARI',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APIACAS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUAIANA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUAINHA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPUTANGA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARENAPOLIS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARIPUANA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO DE MELGACO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO BUGRES',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO GARCAS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASNORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACERES',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINAPOLIS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO NOVO DO PARECIS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO VERDE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS DE JULIO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANABRAVA DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANARANA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARLINDA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTANHEIRA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADA DOS GUIMARAES',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CLAUDIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COCALINHO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLIDER',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COMODORO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONFRESA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COTRIGUACU',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUIABA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DENISE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIAMANTINO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM AQUINO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FELIZ NATAL',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FIGUEIROPOLIS D`OESTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GAUCHA DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENERAL CARNEIRO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GLORIA D`OESTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANTA DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUIRATINGA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDIAVAI',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAUBA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITIQUIRA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACIARA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANGADA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAURU',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUARA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUINA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURUENA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUSCIMEIRA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAMBARI D`OESTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUCAS DO RIO VERDE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUCIARA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCELANDIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATUPA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRASSOL D`OESTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOBRES',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NORTELANDIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DO LIVRAMENTO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA BANDEIRANTES',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA BRASILANDIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CANAA DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA GUARITA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA LACERDA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA MARILANDIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA MARINGA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA MONTE VERDE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA MUTUM',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA OLIMPIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA UBIRATA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA XAVANTINA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO HORIZONTE DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO MUNDO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO SAO JOAQUIM',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAITA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANATINGA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA PRETA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEIXOTO DE AZEVEDO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTO DA SERRA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCONE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTAL DO ARAGUAIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE BRANCA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMBAU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTES E LACERDA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO ALEGRE DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO DOS GAUCHOS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO ESPERIDIAO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO ESTRELA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POXOREO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRIMAVERA DO LESTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUERENCIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESERVA DO CABACAL',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO CASCALHEIRA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAOZINHO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BRANCO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RONDONOPOLIS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSARIO OESTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO DO CEU',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CARMEM',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZINHA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO AFONSO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO LEVERGER',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX DO ARAGUAIA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO POVO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO RIO CLARO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO XINGU',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DOS QUATRO MARCOS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DA CIPA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPEZAL',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SINOP',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SORRISO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABAPORA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANGARA DA SERRA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPURAH',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA NOVA DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TESOURO',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TORIXOREU',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO DO SUL',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA GRANDE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA BELA DA SANTISSIMA TRINDADE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA RICA',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO CARLOS',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIRANGA DO NORTE',
      state_id: 13,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABAETETUBA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABEL FIGUEIREDO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AFUA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA AZUL DO NORTE',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALENQUER',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALMEIRIM',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTAMIRA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAJAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANANINDEUA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAPU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AUGUSTO CORREA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AURORA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AVEIRO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAGRE',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIAO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANNACH',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARCARENA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELEM',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELTERRA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENEVIDES',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO TOCANTINS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONITO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAGANCA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASIL NOVO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO GRANDE DO ARAGUAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREU BRANCO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREVES',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUJARU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DO ARARI',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DO PIRIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMETA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAA DOS CARAJAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPANEMA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITAO POCO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTANHAL',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAVES',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLARES',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO ARAGUAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCORDIA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUMARU DO NORTE',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURIONOPOLIS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRALINHO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURUA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURUCA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM ELISEU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELDORADO DOS CARAJAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FARO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORESTA DO ARAGUAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GARRAFAO DO NORTE',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANESIA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GURUPA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARAPE-ACU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARAPE-MIRI',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHANGAPI',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIXUNA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRITUIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAITUBA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUPIRANGA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACAREACANGA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACUNDA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURUTI',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMOEIRO DO AJURU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAE DO RIO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAGALHAES BARATA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARACANA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAPANIM',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARITUBA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MEDICILANDIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MELGACO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOCAJUBA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOJU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUANA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ESPERANCA DO PIRIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA IPIXUNA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA TIMBOTEUA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO PROGRESSO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO REPARTIMENTO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OBIDOS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OEIRAS DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORIXIMINA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OUREM',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURILANDIA DO NORTE',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACAJA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALESTINA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAGOMINAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAUAPEBAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAU D`ARCO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEIXE-BOI',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PICARRA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLACAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTA DE PEDRAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTEL',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO DE MOZ',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRAINHA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRIMAVERA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUATIPURU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REDENCAO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO MARIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RONDON DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUROPOLIS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALINOPOLIS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALVATERRA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DO ARARI',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ISABEL DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DAS BARREIRAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO ARAGUAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTAREM',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTAREM NOVO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO TAUA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CAETANO DE ODIVELAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO ARAGUAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO CAPIM',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX DO XINGU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO PARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GERALDO DO ARAGUAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA PONTA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DE PIRABAS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO ARAGUAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO GUAMA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DA BOA VISTA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPUCAIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR JOSE PORFIRIO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOURE',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAILANDIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA ALTA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA SANTA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOME-ACU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRACUATEUA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRAIRAO',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUCUMA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUCURUI',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ULIANOPOLIS',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIGIA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VISEU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA DO XINGU',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XINGUARA',
      state_id: 14,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURIPIRANGA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA BRANCA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUIAR',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOA GRANDE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOA NOVA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOINHA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALCANTIL',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALGODAO DE JANDAIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALHANDRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMPARO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APARECIDA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACAGI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARUNA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREIA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREIA DE BARAUNAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREIAL',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AROEIRAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASSUNCAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIA DA TRAICAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANANEIRAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAUNA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DE SANTA ROSA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DE SANTANA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DE SAO MIGUEL',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAYEUX',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELEM',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELEM DO BREJO DO CRUZ',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERNARDINO BATISTA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VENTURA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM SUCESSO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONITO DE SANTA FE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOQUEIRAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BORBOREMA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO DO CRUZ',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO DOS SANTOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAAPORA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABACEIRAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABEDELO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DOS INDIOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACIMBA DE AREIA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACIMBA DE DENTRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACIMBAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAICARA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJAZEIRAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJAZEIRINHAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALDAS BRANDAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMALAU',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINA GRANDE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO DE SANTANA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPIM',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAUBAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARRAPATEIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASSERENGUE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATINGUEIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATOLE DO ROCHA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATURITE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONDADO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONDE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONGO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COREMAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COXIXOLA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZ DO ESPIRITO SANTO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUBATI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUITE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUITE DE MAMANGUAPE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUITEGI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRAL DE CIMA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRAL VELHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DAMIAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DESTERRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIAMANTE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DONA INES',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DUAS ESTRADAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EMAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPERANCA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAGUNDES',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREI MARTINHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GADO BRAVO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARABIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GURINHEM',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GURJAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIARA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARACY',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMACULADA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INGA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABAIANA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPORANGA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPOROROCA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATUBA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACARAU',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JERICO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO PESSOA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUAREZ TAVORA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUAZEIRINHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUNCO DO SERIDO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURU',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DE DENTRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA SECA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LASTRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIVRAMENTO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LOGRADOURO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUCENA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAE D`AGUA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MALTA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAMANGUAPE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANAIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCACAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIZOPOLIS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MASSARANDUBA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATARACA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATINHAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATO GROSSO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATUREIA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOGEIRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTADAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE HOREBE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTEIRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MULUNGU',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NATUBA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZAREZINHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA FLORESTA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA OLINDA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PALMEIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHO D`AGUA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIVEDOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO VELHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARARI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSAGEM',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULISTA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA BRANCA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA LAVRADA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRAS DE FOGO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO REGIS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIANCO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PICUI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILAR',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILOES',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILOEZINHOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRPIRITUBA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PITIMBU',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCINHOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO DANTAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO DE JOSE DE MOURA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POMBAL',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRATA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRINCESA ISABEL',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PUXINANA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEIMADAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIXABA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REMIGIO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHAO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHAO DO BACAMARTE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHAO DO POCO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO DE SANTO ANTONIO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO DOS CAVALOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO TINTO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALGADINHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALGADO DE SAO FELIX',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CECILIA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA HELENA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA INES',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TERESINHA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DE MANGUEIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DOS GARROTES',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTAREM',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANDRE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTINHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DE POMBAL',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO CARIRI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO CARIRI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO RIO DO PEIXE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO TIGRE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA LAGOA TAPADA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DE CAIANA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DE ESPINHARAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DE PIRANHAS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DE PRINCESA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO BONFIM',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO BREJO DO CRUZ',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO SABUGI',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DOS CORDEIROS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DOS RAMOS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MAMEDE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DE TAIPU',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DE LAGOA DE ROCA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO UMBUZEIRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERIDO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA BRANCA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DA RAIZ',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA GRANDE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA REDONDA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRARIA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERTAOZINHO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOBRADO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOLANEA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOLEDADE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOSSEGO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOUSA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUME',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPEROA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAVARES',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEIXEIRA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TENORIO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRIUNFO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UIRAUNA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMBUZEIRO',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIEIROPOLIS',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VISTA SERRANA',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ZABELE',
      state_id: 15,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABREU E LIMA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AFOGADOS DA INGAZEIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AFRANIO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGRESTINA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA PRETA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS BELAS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOINHA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALIANCA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTINHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMARAJI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGELIM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACOIABA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARIPINA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARCOVERDE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DE GUABIRABA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARREIROS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELEM DE MARIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELEM DE SAO FRANCISCO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELO JARDIM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BETANIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BEZERROS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BODOCO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM CONSELHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JARDIM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONITO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJAO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJINHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO DA MADRE DE DEUS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUENOS AIRES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUIQUE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABO DE SANTO AGOSTINHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABROBO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRINHA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAETES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALCADO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALUMBI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMARAGIBE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMOCIM DE SAO FELIX',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMUTANGA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANHOTINHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPOEIRAS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARNAIBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARNAUBEIRA DA PENHA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARPINA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARUARU',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASINHAS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATENDE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEDRO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHA DE ALEGRIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHA GRANDE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONDADO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORRENTES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORTES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUMARU',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUPIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUSTODIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DORMENTES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESCADA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EXU',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FEIRA NOVA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNANDO DE NORONHA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERREIROS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORESTA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREI MIGUELINHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GAMELEIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GARANHUNS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GLORIA DO GOITA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRANITO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAVATA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IATI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIMIRIM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRAJUBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARASSU',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUARACI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INAJA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INGAZEIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPOJUCA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUBI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITACURUBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAIBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMARACA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMBE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPETIM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPISSUMA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAQUITINGA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABOATAO DOS GUARARAPES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAQUEIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATAUBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATOBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO ALFREDO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAQUIM NABUCO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUCATI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUPI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUREMA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO CARRO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO ITAENGA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO OURO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DOS GATOS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA GRANDE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEDO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMOEIRO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAPARANA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACHADOS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANARI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAIAL',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANDIBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOREILANDIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORENO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZARE DA MATA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLINDA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OROBO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OROCO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURICURI',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMARES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRINA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PANELAS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANATAMA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARNAMIRIM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAUDALHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULISTA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PESQUEIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PETROLANDIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PETROLINA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCAO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POMBOS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRIMAVERA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIPAPA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUIXABA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RECIFE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO DAS ALMAS',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO FORMOSO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAIRE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALGADINHO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALGUEIRO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALOA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANHARO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DA BAIXA VERDE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DO CAPIBARIBE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FILOMENA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DA BOA VISTA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DO CAMBUCA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZINHA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENEDITO DO SUL',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO DO UNA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CAITANO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAQUIM DO MONTE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA COROA GRANDE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO BELMONTE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO EGITO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LOURENCO DA MATA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VICENTE FERRER',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA TALHADA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRITA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERTANIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIRINHAEM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOLIDAO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SURUBIM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABIRA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TACAIMBO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TACARATU',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAMANDARE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARITINGA DO NORTE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEREZINHA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA NOVA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMBAUBA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TORITAMA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRACUNHAEM',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRINDADE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRIUNFO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPANATINGA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPARETAMA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VENTUROSA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERDEJANTE',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERTENTE DO LERIO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERTENTES',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICENCIA',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA DE SANTO ANTAO',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XEXEU',
      state_id: 16,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACAUA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGRICOLANDIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA BRANCA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAGOINHA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALEGRETE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO LONGA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVORADA DO GURGUEIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMARANTE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGICAL DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANISIO DE ABREU',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO ALMEIDA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AROAZES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARRAIAL',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASSUNCAO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AVELINO LOPES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIXA GRANDE DO RIBEIRO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA D`ALCANTARA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARREIRAS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRO DURO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BATALHA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELEM DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENEDITINOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERTOLINIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BETANIA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA HORA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCAINA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM PRINCIPIO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONFIM DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOQUEIRAO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILEIRA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITI DOS LOPES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITI DOS MONTES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABECEIRAS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJAZEIRAS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJUEIRO DA PRAIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALDEIRAO GRANDE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINAS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO ALEGRE DO FIDALGO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO GRANDE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO LARGO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO MAIOR',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAVIEIRA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANTO DO BURITI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITAO DE CAMPOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITAO GERVASIO OLIVEIRA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARACOL',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAUBAS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIDADE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTELO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAXINGO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COCAL',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COCAL DE TELHA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COCAL DOS ALVES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COIVARAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLONIA DO GURGUEIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLONIA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO CANINDE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL JOSE DIAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORRENTE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTALANDIA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTINO CASTRO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURIMATA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRAIS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRAL NOVO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRALINHOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DEMERVAL LOBAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIRCEU ARCOVERDE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM EXPEDITO LOPES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM INOCENCIO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOMINGOS MOURAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELESBAO VELOSO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELISEU MARTINS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPERANTINA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FARTURA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORES DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORESTA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORIANO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCINOPOLIS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO AYRES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO MACEDO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO SANTOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRONTEIRAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GEMINIANO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GILBUES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUADALUPE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARIBAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HUGO NAPOLEAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILHA GRANDE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHUMA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIRANGA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ISAIAS COELHO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAINOPOLIS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAUEIRA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACOBINA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAICOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM DO MULATO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATOBA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JERUMENHA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO COSTA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAQUIM PIRES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOCA MARQUES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSE DE FREITAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUAZEIRO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JULIO BORGES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUREMA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA ALEGRE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DE SAO FRANCISCO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO BARRO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO SITIO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOINHA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LANDRI SALES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUIS CORREIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUZILANDIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MADEIRO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANOEL EMIDIO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCOLANDIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCOS PARENTE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MASSAPE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATIAS OLIMPIO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIGUEL ALVES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIGUEL LEAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MILTON BRANDAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONSENHOR GIL',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONSENHOR HIPOLITO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO CABECA NO TEMPO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO DO CHAPEU DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MURICI DOS PORTELAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZARE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DE NAZARE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DOS REMEDIOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA SANTA RITA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO ORIENTE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO SANTO ANTONIO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OEIRAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHO D`AGUA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PADRE MARCOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAES LANDIM',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAJEU DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRAIS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAQUETA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARNAGUA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARNAIBA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSAGEM FRANCA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATOS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULISTANA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAVUSSU',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO II',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO LAURENTINO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PICOS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIMENTEIRAS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIO IX',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRACURUCA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRIPIRI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO ALEGRE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRATA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEIMADA NOVA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REDENCAO DO GURGUEIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REGENERACAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO FRIO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRO GONCALVES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO GRANDE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DOS MILAGRES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FILOMENA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZ',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DE LISBOA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DOS MILAGRES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO INACIO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BRAZ DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DE ASSIS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO GURGUEIA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA CANABRAVA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA FRONTEIRA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA SERRA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA VARJOTA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO ARRAIAL',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO DIVINO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO PEIXE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JULIAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LOURENCO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIS DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DA BAIXA GRANDE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO FIDALGO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO TAPUIO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO RAIMUNDO NONATO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEBASTIAO BARROS',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEBASTIAO LEAL',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIGEFREDO PACHECO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIMOES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIMPLICIO MENDES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOCORRO DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUSSUAPARA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAMBORIL DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANQUE DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERESINA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUCUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALENCA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA BRANCA',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA GRANDE',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERA MENDES',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA NOVA DO PIAUI',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WALL FERRAZ',
      state_id: 17,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABATIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ADRIANOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUDOS DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALMIRANTE TAMANDARE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTAMIRA DO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO PIQUIRI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTONIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVORADA DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMAPORA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMPERE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANAHY',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANDIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGULO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO OLINTO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APUCARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPONGAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPOTI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPUA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARUNA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAUCARIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARIRANHA DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASSAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASSIS CHATEAUBRIAND',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASTORGA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ATALAIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALSA NOVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANDEIRANTES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARBOSA FERRAZ',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO JACARE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRACAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA DA CAROBA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA DO PARAISO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BITURUNA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA ESPERANCA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA ESPERANCA DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VENTURA DE SAO ROQUE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA DA APARECIDA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCAIUVA DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM SUCESSO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM SUCESSO DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BORRAZOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAGANEY',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILANDIA DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAFEARA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAFELANDIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAFEZAL DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALIFORNIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBARA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINA DA LAGOA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINA DO SIMAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINA GRANDE DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO BONITO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO DO TENENTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO LARGO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO MAGRO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO MOURAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIDO DE ABREU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDOI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANTAGALO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPANEMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITAO LEONIDAS MARQUES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAMBEI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARLOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASCAVEL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTRO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATANDUVAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTENARIO DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRO AZUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEU AZUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHOPINZINHO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIANORTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIDADE GAUCHA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CLEVELANDIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLOMBO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLORADO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONGONHINHAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONSELHEIRO MAIRINCK',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONTENDA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORBELIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORNELIO PROCOPIO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL DOMINGOS SOARES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL VIVIDA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORUMBATAI DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZ MACHADO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZEIRO DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZEIRO DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZEIRO DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZMALTINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURITIBA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURIUVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIAMANTE D`OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIAMANTE DO NORTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIAMANTE DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS VIZINHOS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOURADINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOUTOR CAMARGO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOUTOR ULYSSES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENEAS MARQUES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENGENHEIRO BELTRAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENTRE RIOS DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPERANCA NOVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPIGAO ALTO DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAROL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAXINAL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAZENDA RIO GRANDE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FENIX',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNANDES PINHEIRO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FIGUEIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLOR DA SERRA DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORESTA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORESTOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORIDA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSA DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FOZ DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FOZ DO JORDAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO ALVES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO BELTRAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENERAL CARNEIRO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GODOY MOREIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIOERE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIOXIM',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRANDES RIOS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAIRACA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAMIRANGA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPIRAMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPOREMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARACI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANIACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAPUAVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAQUECABA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARATUBA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HONORIO SERPA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBAITI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBEMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIPORA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICARAIMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUARACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUATU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMBITUVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INACIO MARTINS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INAJA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDIANOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIRANGA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPORA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRACEMA DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRATI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRETAMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUAJE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAIPULANDIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMBARACA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAMBE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPEJARA D`OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPERUCU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAUNA DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVAIPORA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVATE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVATUBA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABOTI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACAREZINHO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUAPITA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARIAIVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANDAIA DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANIOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPURA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM ALEGRE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM OLINDA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JATAIZINHO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JESUITAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAQUIM TAVORA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUNDIAI DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JURANDA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUSSARA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'KALORE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAPA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LARANJAL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LARANJEIRAS DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIDIANOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LINDOESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LOANDA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LOBATO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LONDRINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUIZIANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUNARDELLI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUPIONOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MALLET',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAMBORE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANDAGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANDAGUARI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANDIRITUBA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANFRINOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANGUEIRINHA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANOEL RIBAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARECHAL CANDIDO RONDON',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIA HELENA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIALVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARILANDIA DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARILENA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARILUZ',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARINGA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIPA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARMELEIRO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARQUINHO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARUMBI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATELANDIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATINHOS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATO RICO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAUA DA SERRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MEDIANEIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MERCEDES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRADOR',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRASELVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MISSAL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOREIRA SALES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRETES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUNHOZ DE MELO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DAS GRACAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ALIANCA DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA AMERICA DA COLINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA AURORA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CANTU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ESPERANCA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ESPERANCA DO SUDOESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA FATIMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA LARANJEIRAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA LONDRINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA OLIMPIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PRATA DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA SANTA BARBARA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA SANTA ROSA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA TEBAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO ITACOLOMI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORTIGUEIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURIZONA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO VERDE DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAICANDU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMITAL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALOTINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAISO DO NORTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANACITY',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAGUA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAPOEMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATO BRAGADO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATO BRANCO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULA FREITAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULO FRONTIN',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEABIRU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEROBAL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEROLA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEROLA D`OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIEN',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHAIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHAL DE SAO BENTO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHALAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAI DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAQUARA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PITANGA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PITANGUEIRAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTINA DO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTA GROSSA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTAL DO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORECATU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO AMAZONAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO BARREIRO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO RICO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO VITORIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRADO FERREIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRANCHITA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE CASTELO BRANCO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRIMEIRO DE MAIO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRUDENTOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUARTO CENTENARIO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUATIGUA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUATRO BARRAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUATRO PONTES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEDAS DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUERENCIA DO NORTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUINTA DO SOL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUITANDINHA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAMILANDIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RANCHO ALEGRE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RANCHO ALEGRE D`OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REALEZA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REBOUCAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RENASCENCA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESERVA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESERVA DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO CLARO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO DO PINHAL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO AZUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BOM',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BONITO DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BRANCO DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BRANCO DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO NEGRO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROLANDIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RONCADOR',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RONDON',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSARIO DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SABAUDIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALGADO FILHO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO DO ITARARE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO DO LONTRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA AMELIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CECILIA DO PAVAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DE MONTE CASTELO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA HELENA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA INES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ISABEL DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA IZABEL DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUCIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MONICA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZA DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZINHA DE ITAIPU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO ITARARE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DA PLATINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO CAIUA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO PARAISO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO SUDOESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO INACIO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CARLOS DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JERONIMO DA SERRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO CAIUA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO TRIUNFO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JORGE D`OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JORGE DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JORGE DO PATROCINIO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA BOA VISTA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DAS PALMEIRAS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DOS PINHAIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MANOEL DO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MATEUS DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO IVAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DA AMOREIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO TOME',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPOPEMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SARANDI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAUDADE DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENGES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRANOPOLIS DO IGUACU',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERTANEJA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERTANOPOLIS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIQUEIRA CAMPOS',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SULINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAMARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAMBOARA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPEJARA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPIRA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEIXEIRA SOARES',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TELEMACO BORBA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA BOA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA RICA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA ROXA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIBAGI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIJUCAS DO SUL',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOLEDO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOMAZINA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES BARRAS DO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUNAS DO PARANA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUNEIRAS DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPASSI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURVO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBIRATA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMUARAMA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO DA VITORIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIFLOR',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URAI',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VENTANIA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERA CRUZ DO OESTE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA ALTA',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIRMOND',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORINO',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WENCESLAU BRAZ',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XAMBRE',
      state_id: 18,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGRA DOS REIS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APERIBE',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARUAMA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREAL',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARMACAO DOS BUZIOS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARRAIAL DO CABO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO PIRAI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA MANSA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELFORD ROXO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JARDIM',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO ITABAPOANA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABO FRIO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRAS DE MACACU',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBUCI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS DOS GOYTACAZES',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANTAGALO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAPEBUS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARDOSO MOREIRA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASIMIRO DE ABREU',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COMENDADOR LEVY GASPARIAN',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DE MACABU',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORDEIRO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DUAS BARRAS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DUQUE DE CAXIAS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENGENHEIRO PAULO DE FRONTIN',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPIMIRIM',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUABA GRANDE',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABORAI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUAI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITALVA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAOCARA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPERUNA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATIAIA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPERI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJE DO MURIAE',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAE',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACUCO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAGE',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANGARATIBA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARICA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MENDES',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIGUEL PEREIRA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRACEMA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NATIVIDADE',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NILOPOLIS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NITEROI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA FRIBURGO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA IGUACU',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARACAMBI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAIBA DO SUL',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARATI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATY DO ALFERES',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PETROPOLIS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHEIRAL',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORCIUNCULA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO REAL',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUATIS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEIMADOS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUISSAMA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESENDE',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO BONITO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO CLARO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DAS FLORES',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DAS OSTRAS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DE JANEIRO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA MADALENA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DE PADUA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FIDELIS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DE ITABAPOANA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA BARRA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DE MERITI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DE UBA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO VALE DO RIO PRETO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DA ALDEIA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO ALTO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPUCAIA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAQUAREMA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEROPEDICA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVA JARDIM',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUMIDOURO',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANGUA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERESOPOLIS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRAJANO DE MORAIS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES RIOS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALENCA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARRE-SAI',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VASSOURAS',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VOLTA REDONDA',
      state_id: 19,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACARI',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ACU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AFONSO BEZERRA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA NOVA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALEXANDRIA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALMINO AFONSO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO DO RODRIGUES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGICOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO MARTINS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APODI',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREIA BRANCA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AUGUSTO SEVERO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAIA FORMOSA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAUNA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARCELONA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENTO FERNANDES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BODO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJINHO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAICARA DO NORTE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAICARA DO RIO DO VENTO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAICO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO REDONDO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANGUARETAMA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAUBAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARNAUBA DOS DANTAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARNAUBAIS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEARA-MIRIM',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRO CORA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL EZEQUIEL',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL JOAO PESSOA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZETA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURRAIS NOVOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOUTOR SEVERIANO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENCANTO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EQUADOR',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPIRITO SANTO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EXTREMOZ',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FELIPE GUERRA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNANDO PEDROZA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORANIA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO DANTAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRUTUOSO GOMES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GALINHOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANINHA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR DIX-SEPT ROSADO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GROSSOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAMARE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IELMO MARINHO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPANGUACU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUEIRA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACANA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANDAIRA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANDUIS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANUARIO CICCO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPI',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM DE ANGICOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM DE PIRANHAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDIM DO SERIDO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO CAMARA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO DIAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSE DA PENHA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUCURUTU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA D`ANTA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DE PEDRAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DE VELHOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA NOVA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA SALGADA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJES PINTADAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUCRECIA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUIS GOMES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAIBA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAJOR SALES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCELINO VIEIRA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARTINS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAXARANGUAPE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MESSIAS TARGINO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTANHAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE DAS GAMELEIRAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOSSORO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NATAL',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NISIA FLORESTA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CRUZ',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLHO-D`AGUA DO BORGES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO BRANCO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAZINHO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARELHAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARNAMIRIM',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSA E FICA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSAGEM',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAU DOS FERROS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA GRANDE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA PRETA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO AVELINO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO VELHO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PENDENCIAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILOES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO BRANCO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTALEGRE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO DO MANGUE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE JUSCELINO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PUREZA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAFAEL FERNANDES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAFAEL GODEIRO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO DA CRUZ',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHO DE SANTANA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHUELO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DO FOGO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RODOLFO FERNANDES',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUY BARBOSA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO MATOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO SERIDO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO DO NORTE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO DO TRAIRI',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FERNANDO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO OESTE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GONCALO DO AMARANTE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO SABUGI',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DE MIPIBU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO CAMPESTRE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO SERIDO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DE TOUROS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PAULO DO POTENGI',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO RAFAEL',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO TOME',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VICENTE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR ELOI DE SOUZA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR GEORGINO AVELINO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DE SAO BENTO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA DO MEL',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA NEGRA DO NORTE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRINHA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRINHA DOS PINTOS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEVERIANO MELO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SITIO NOVO',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABOLEIRO GRANDE',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAIPU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANGARA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TENENTE ANANIAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TENENTE LAURENTINO CRUZ',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIBAU',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIBAU DO SUL',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMBAUBA DOS BATISTAS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOUROS',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRIUNFO POTIGUAR',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMARIZAL',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UPANEMA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VENHA-VER',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERA CRUZ',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICOSA',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA FLOR',
      state_id: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTA FLORESTA D`OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO ALEGRE DOS PARECIS',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO PARAISO',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVORADA D`OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARIQUEMES',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITIS',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABIXI',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACAULANDIA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACOAL',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO NOVO DE RONDONIA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDEIAS DO JAMARI',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTANHEIRAS',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEREJEIRAS',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHUPINGUAIA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLORADO DO OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORUMBIARA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COSTA MARQUES',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUJUBIM',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPIGAO D`OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR JORGE TEIXEIRA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAJARA-MIRIM',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPUA DO OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARU',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JI-PARANA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACHADINHO D`OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINISTRO ANDREAZZA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANTE DA SERRA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE NEGRO',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA BRASILANDIA D`OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA MAMORE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA UNIAO',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO HORIZONTE DO OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO PRETO DO OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARECIS',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIMENTA BUENO',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIMENTEIRAS DO OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO VELHO',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE MEDICI',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRIMAVERA DE RONDONIA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO CRESPO',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROLIM DE MOURA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA D`OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIPE D`OESTE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO GUAPORE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO GUAPORE',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERINGUEIRAS',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEIXEIROPOLIS',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'THEOBROMA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUPA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALE DO ANARI',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALE DO PARAISO',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILHENA',
      state_id: 21,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO ALEGRE',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMAJARI',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BONFIM',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANTA',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARACARAI',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAROEBE',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRACEMA',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUCAJAI',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NORMANDIA',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACARAIMA',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RORAINOPOLIS',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA BALIZA',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIZ',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UIRAMUTA',
      state_id: 22,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA SANTA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUDO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AJURICABA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALECRIM',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALEGRETE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALEGRIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALPESTRE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO ALEGRE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO FELIZ',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVORADA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMARAL FERRADOR',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMETISTA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANDRE DA ROCHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTA GORDA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO PRADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAMBARE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARICA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARATIBA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARROIO DO MEIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARROIO DO SAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARROIO DO TIGRE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARROIO DOS RATOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARROIO GRANDE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARVOREZINHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AUGUSTO PESTANA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AUREA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAGE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALNEARIO PINHAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO DE COTEGIPE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO DO TRIUNFO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO GUARITA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO QUARAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO RIBEIRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO RIO AZUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA FUNDA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRACAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARROS CASSAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENJAMIN CONSTANT DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENTO GONCALVES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA DO BURICA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA VISTA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM PRINCIPIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM PROGRESSO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM RETIRO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOQUEIRAO DO LEAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOSSOROCA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAGA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BROCHIER',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BUTIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACAPAVA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACEQUI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRINHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACIQUE DOBLE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIBATE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAICARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMAQUA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMARGO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBARA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPESTRE DA SERRA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINA DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINAS DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO BOM',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO NOVO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS BORGES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDELARIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIDO GODOI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIOTA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANELA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANGUCU',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANOAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPAO DA CANOA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPAO DO LEAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPELA DE SANTANA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPITAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPIVARI DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAZINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARLOS BARBOSA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARLOS GOMES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASCA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASEIROS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATUIPE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAXIAS DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTENARIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRITO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRO BRANCO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRO GRANDE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRO GRANDE DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRO LARGO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHARQUEADAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHARRUA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHIAPETA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHUI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHUVISCA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIDREIRA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CIRIACO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLINAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLORADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONDOR',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONSTANTINA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COQUEIROS DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL BARROS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL BICACO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COTIPORA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COXILHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISSIUMAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTAL DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZ ALTA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZEIRO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DAVID CANABARRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DERRUBADAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DEZESSEIS DE NOVEMBRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DILERMANDO DE AGUIAR',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS IRMAOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS IRMAOS DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS LAJEADOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM FELICIANO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM PEDRITO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOM PEDRO DE ALCANTARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DONA FRANCISCA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOUTOR MAURICIO CARDOSO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOUTOR RICARDO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELDORADO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENCANTADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENCRUZILHADA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENGENHO VELHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENTRE RIOS DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENTRE-IJUIS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EREBANGO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERECHIM',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERNESTINA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERVAL GRANDE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERVAL SECO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESMERALDA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPERANCA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPUMOSO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTACAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTANCIA VELHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTEIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA VELHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EUGENIO DE CASTRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAGUNDES VARELA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FARROUPILHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAXINAL DO SOTURNO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAXINALZINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAZENDA VILANOVA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FELIZ',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORES DA CUNHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORIANO PEIXOTO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FONTOURA XAVIER',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMIGUEIRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTALEZA DOS VALOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREDERICO WESTPHALEN',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GARIBALDI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GARRUCHOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GAURAMA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENERAL CAMARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENTIL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GETULIO VARGAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GIRUA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GLORINHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAMADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAMADO DOS LOUREIROS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAMADO XAVIER',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAVATAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUABIJU',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAIBA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPORE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANI DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HARMONIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HERVAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HERVEIRAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HORIZONTINA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HULHA NEGRA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HUMAITA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBARAMA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIACA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRAIARAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRAPUITA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRUBA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGREJINHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IJUI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILOPOLIS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMBE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMIGRANTE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDEPENDENCIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INHACORA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIRANGA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITACURUBI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPUCA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAQUI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATIBA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVORA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IVOTI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABOTICABA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACUTINGA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAQUIRANA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JULIO DE CASTILHOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DOS TRES CANTOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA VERMELHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEADO DO BUGRE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAVRAS DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIBERATO SALZANO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LINDOLFO COLLOR',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LINHA NOVA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAMBARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACHADINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAMPITUBA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANOEL VIANA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAQUINE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARATA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAU',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARCELINO RAMOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIANA PIMENTEL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIANO MORO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARQUES DE SOUZA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATO CASTELHANO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATO LEITAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAXIMILIANO DE ALMEIDA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINAS DO LEAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRAGUAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTAURI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE DOS CAMPOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE BELO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTENEGRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORMACO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRINHOS DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO REDONDO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO REUTER',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOSTARDAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUCUM',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MUITOS CAPOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MULITERNO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAO-ME-TOQUE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NICOLAU VERGUEIRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NONOAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ALVORADA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ARACA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA BASSANO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA BOA VISTA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA BRESCIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CANDELARIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ESPERANCA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA HARTZ',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PADUA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PALMA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PETROPOLIS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA PRATA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA RAMADA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ROMA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA SANTA RITA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO BARREIRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO CABRAIS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO HAMBURGO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO MACHADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO TIRADENTES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OSORIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAIM FILHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMARES DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRA DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMITINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PANAMBI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PANTANO GRANDE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAISO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARECI NOVO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAROBE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSA SETE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSO DO SOBRADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSO FUNDO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAVERAMA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO OSORIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEJUCARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PELOTAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PICADA CAFE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHAL GRANDE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHEIRINHO DO VALE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHEIRO MACHADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAPO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRATINI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO DAS ANTAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE PRETA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO ALEGRE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO LUCENA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO MAUA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO VERA CRUZ',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO XAVIER',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POUSO NOVO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE LUCENA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PROGRESSO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PROTASIO ALVES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PUTINGA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUARAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEVEDOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUINZE DE NOVEMBRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REDENTORA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RELVADO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESTINGA SECA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DOS INDIOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO GRANDE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO PARDO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIOZINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROCA SALES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RODEIO BONITO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROLANTE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RONDA ALTA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RONDINHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROQUE GONZALES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSARIO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAGRADA FAMILIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALDANHA MARINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO DO JACUI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALVADOR DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALVADOR DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANANDUVA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CLARA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DO HERVAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA VITORIA DO PALMAR',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DA BOA VISTA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO LIVRAMENTO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTIAGO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANGELO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DA PATRULHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO PALMA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO PLANALTO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO AUGUSTO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO CRISTO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO EXPEDITO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BORJA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DE ASSIS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DE PAULA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO GABRIEL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JERONIMO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA URTIGA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO POLESINE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JORGE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO HERVAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO HORTENCIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO INHACORA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO NORTE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO OURO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DOS AUSENTES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LEOPOLDO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LOURENCO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIZ GONZAGA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MARCOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MARTINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MARTINHO DA SERRA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO NICOLAU',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PAULO DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DA SERRA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO BUTIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO CAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEPE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VALENTIM',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VALENTIM DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VALERIO DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VENDELINO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VICENTE DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPIRANGA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAPUCAIA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SARANDI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEBERI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEDE NOVA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEGREDO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SELBACH',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENADOR SALGADO FILHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SENTINELA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERAFINA CORREA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERTAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERTAO SANTANA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SETE DE SETEMBRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEVERIANO DE ALMEIDA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVEIRA MARTINS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SINIMBU',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOBRADINHO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOLEDADE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPEJARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPERA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARUCU DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAVARES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TENENTE PORTELA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA DE AREIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEUTONIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIRADENTES DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOROPI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TORRES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRAMANDAI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRAVESSEIRO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES ARROIOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES CACHOEIRAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES COROAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES DE MAIO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES FORQUILHAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES PALMEIRAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES PASSOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRINDADE DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRIUNFO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUCUNDUVA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUNAS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPANCI DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPANCIRETA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPANDI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPARENDI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURUCU',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBIRETAMA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO DA SERRA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNISTALDA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUGUAIANA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VACARIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALE DO SOL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALE REAL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALE VERDE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VANINI',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VENANCIO AIRES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERA CRUZ',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERANOPOLIS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VESPASIANO CORREA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIADUTOS',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIAMAO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICENTE DUTRA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VICTOR GRAEFF',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA FLORES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA LANGARO',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA MARIA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VILA NOVA DO SUL',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VISTA ALEGRE',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VISTA ALEGRE DO PRATA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VISTA GAUCHA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA DAS MISSOES',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XANGRI-LA',
      state_id: 23,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABDON BATISTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABELARDO LUZ',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGROLANDIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGRONOMICA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUA DOCE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS DE CHAPECO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS FRIAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS MORNAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALFREDO WAGNER',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO BELA VISTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANCHIETA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGELINA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANITA GARIBALDI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANITAPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANTONIO CARLOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APIUNA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARABUTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAQUARI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARANGUA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARMAZEM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARROIO TRINTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARVOREDO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASCURRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ATALANTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AURORA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALNEARIO ARROIO DO SILVA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALNEARIO BARRA DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALNEARIO CAMBORIU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALNEARIO GAIVOTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANDEIRANTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA BONITA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA VELHA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELA VISTA DO TOLDO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BELMONTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENEDITO NOVO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BIGUACU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BLUMENAU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCAINA DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JARDIM DA SERRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM RETIRO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOMBINHAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOTUVERA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRACO DO NORTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRACO DO TROMBUDO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRUNOPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRUSQUE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACADOR',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIBI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CALMON',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMBORIU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO ALEGRE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO BELO DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO ERE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS NOVOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANELINHA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANOINHAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPAO ALTO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPINZAL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPIVARI DE BAIXO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATANDUVAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAXAMBU DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CELSO RAMOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERRO NEGRO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADAO DO LAGEADO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPECO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COCAL DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCORDIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORDILHEIRA ALTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL FREITAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL MARTINS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORREIA PINTO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORUPA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRICIUMA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUNHA PORA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUNHATAI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CURITIBANOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DESCANSO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIONISIO CERQUEIRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DONA EMMA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOUTOR PEDRINHO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENTRE RIOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERMO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ERVAL VELHO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FAXINAL DOS GUEDES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLOR DO SERTAO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORIANOPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSA DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORQUILHINHA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRAIBURGO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREI ROGERIO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GALVAO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GAROPABA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GARUVA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GASPAR',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOVERNADOR CELSO RAMOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAO PARA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRAVATAL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUABIRUBA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARACIABA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAMIRIM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARUJA DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUATAMBU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HERVAL D`OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIAM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBICARE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRAMA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICARA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILHOTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMARUI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMBITUBA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IMBUIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDAIAL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IOMERE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPORA DO OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUACU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUMIRIM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRACEMINHA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRANI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRATI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRINEOPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAIOPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJAI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPEMA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIRANGA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPOA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUPORANGA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABORA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACINTO MACHADO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARUNA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARAGUA DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDINOPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOACABA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOINVILLE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSE BOITEUX',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUPIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LACERDOPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGUNA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEADO GRANDE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAURENTINO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAURO MULLER',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEBON REGIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEOBERTO LEAL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LINDOIA DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LONTRAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUIZ ALVES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUZERNA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACIEIRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAFRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAJOR GERCINO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAJOR VIEIRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARACAJA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAVILHA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAREMA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MASSARANDUBA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATOS COSTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MELEIRO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRIM DOCE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MODELO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONDAI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE CARLO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE CASTELO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO DA FUMACA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO GRANDE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAVEGANTES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ERECHIM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ITABERABA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA TRENTO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA VENEZA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO HORIZONTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORLEANS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OTACILIO COSTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO VERDE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAIAL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAINEL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALHOCA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMA SOLA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMITOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAPANDUVA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAISO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSO DE TORRES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PASSOS MAIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULO LOPES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRAS GRANDES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PENHA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERITIBA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PETROLANDIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PICARRAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHALZINHO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHEIRO PRETO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRATUBA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTO ALEGRE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POMERODE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE ALTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE ALTA DO NORTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE SERRADA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO BELO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO UNIAO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POUSO REDONDO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRAIA GRANDE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE CASTELO BRANCO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE GETULIO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE NEREU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRINCESA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUILOMBO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RANCHO QUEIMADO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DAS ANTAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DO CAMPO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DO OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DOS CEDROS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO FORTUNA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO NEGRINHO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO RUFINO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIQUEZA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RODEIO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROMELANDIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALETE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTINHO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO VELOSO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANGAO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CECILIA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA HELENA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DE LIMA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZINHA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZINHA DO PROGRESSO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTIAGO DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO AMARO DA IMPERATRIZ',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BERNARDINO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BONIFACIO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CARLOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CRISTOVAO DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO BATISTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO ITAPERIU',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAQUIM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO CEDRO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO CERRITO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LOURENCO DO OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUDGERO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MARTINHO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DA BOA VISTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DE ALCANTARA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAUDADES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SCHROEDER',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEARA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA ALTA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIDEROPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOMBRIO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUL BRASIL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAIO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANGARA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIGRINHOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIJUCAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMBE DO SUL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMBO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMBO GRANDE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES BARRAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TREVISO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TREZE DE MAIO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TREZE TILIAS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TROMBUDO CENTRAL',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUBARAO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUNAPOLIS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURVO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO DO OESTE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUBICI',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUPEMA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUSSANGA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEAO',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM BONITA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIDAL RAMOS',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIDEIRA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITOR MEIRELES',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WITMARSUM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XANXERE',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XAVANTINA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XAXIM',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ZORTEA',
      state_id: 24,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMPARO DE SAO FRANCISCO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AQUIDABA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACAJU',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAUA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREIA BRANCA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DOS COQUEIROS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOQUIM',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO GRANDE',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO DO BRITO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANHOBA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANINDE DE SAO FRANCISCO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPELA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIRA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMOPOLIS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEDRO DE SAO JOAO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTINAPOLIS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUMBE',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINA PASTORA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTANCIA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FEIRA NOVA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FREI PAULO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GARARU',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENERAL MAYNARD',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GRACHO CARDOSO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILHA DAS FLORES',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDIAROBA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABAIANA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABAIANINHA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABI',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPORANGA D`AJUDA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPARATUBA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAPOATA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGARTO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LARANJEIRAS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAMBIRA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MALHADA DOS BOIS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MALHADOR',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARUIM',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOITA BONITA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE DE SERGIPE',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MURIBECA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NEOPOLIS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA APARECIDA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DA GLORIA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DAS DORES',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DE LOURDES',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOSSA SENHORA DO SOCORRO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACATUBA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA MOLE',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRINHAS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHAO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAMBU',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO REDONDO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAUNA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POCO VERDE',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO DA FOLHA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PROPRIA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHAO DO DANTAS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHUELO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIROPOLIS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSARIO DO CATETE',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALGADO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUZIA DO ITANHY',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DE LIMA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DO SAO FRANCISCO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO AMARO DAS BROTAS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CRISTOVAO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO DOMINGOS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO ALEIXO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIMAO DIAS',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SIRIRI',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TELHA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOBIAS BARRETO',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOMAR DO GERU',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UMBAUBA',
      state_id: 25,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ADAMANTINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ADOLFO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS DA PRATA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS DE LINDOIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS DE SANTA BARBARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUAS DE SAO PEDRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUDOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALAMBARI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALFREDO MARCONDES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTAIR',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTINOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALTO ALEGRE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALUMINIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVARES FLORENCE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVARES MACHADO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVARO DE CARVALHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVINLANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMERICANA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMERICO BRASILIENSE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMERICO DE CAMPOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AMPARO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANALANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANDRADINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGATUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANHEMBI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANHUMAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APARECIDA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APARECIDA D`OESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APIAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACARIGUAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACATUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARACOIABA DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAMINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARANDU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPEI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARAQUARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARARAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARCO-IRIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREALVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREIAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AREIOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARIRANHA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARTUR NOGUEIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARUJA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASPASIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ASSIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ATIBAIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AURIFLAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AVAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AVANHANDAVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AVARE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BADY BASSITT',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALBINOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BALSAMO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANANAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARAO DE ANTONINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARBOSA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARIRI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA BONITA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO CHAPEU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO TURVO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRETOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRINHA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARUERI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BASTOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BATATAIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BAURU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BEBEDOURO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BENTO DE ABREU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERNARDINO DE CAMPOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERTIOGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BILAC',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BIRIGUI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BIRITIBA-MIRIM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOA ESPERANCA DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOCAINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOFETE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOITUVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DOS PERDOES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM SUCESSO DE ITARARE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BORA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BORACEIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BORBOREMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOREBI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOTUCATU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRAGANCA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJO ALEGRE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRODOWSKI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BROTAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITIZAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABRALIA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CABREUVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACAPAVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACONDE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAFELANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIABU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIEIRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAIUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJAMAR',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJATI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJOBI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAJURU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINA DO MONTE ALEGRE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPINAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPO LIMPO PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS DO JORDAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS NOVOS PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANANEIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIDO MOTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANDIDO RODRIGUES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CANITAR',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPAO BONITO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPELA DO ALTO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAPIVARI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAGUATATUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARAPICUIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARDOSO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASA BRANCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASSIA DOS COQUEIROS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASTILHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATANDUVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CATIGUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CEDRAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERQUEIRA CESAR',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CERQUILHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CESARIO LANGE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHARQUEADA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAVANTES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CLEMENTINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLOMBIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCHAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCHAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORDEIROPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COROADOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORONEL MACEDO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CORUMBATAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COSMOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COSMORAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COTIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRAVINHOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTAIS PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZALIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRUZEIRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUBATAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CUNHA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DESCALVADO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIADEMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIRCE REIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINOLANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOBRADA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS CORREGOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOLCINOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOURADO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DRACENA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DUARTINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DUMONT',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ECHAPORA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELDORADO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELIAS FAUSTO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ELISIARIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EMBAUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EMBU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EMBU-GUACU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EMILIANOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ENGENHEIRO COELHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPIRITO SANTO DO PINHAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPIRITO SANTO DO TURVO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTIVA GERBI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA D`OESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESTRELA DO NORTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'EUCLIDES DA CUNHA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FARTURA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNANDO PRESTES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNANDOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERNAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FERRAZ DE VASCONCELOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORA RICA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLOREAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORINIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FLORIDA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCISCO MORATO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FRANCO DA ROCHA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GABRIEL MONTEIRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GALIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GARCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GASTAO VIDIGAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GAVIAO PEIXOTO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GENERAL SALGADO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GETULINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GLICERIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAICARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAIMBE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPIACU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAPIARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARACAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARACI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANI D`OESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARANTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARARAPES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAREMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARATINGUETA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUAREI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARUJA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARULHOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUATAPARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUZOLANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HERCULANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HOLAMBRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'HORTOLANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IACANGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IACRI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IARAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBATE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIRAREMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBITINGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IBIUNA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ICEM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IEPE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARACU DO TIETE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARAPAVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGARATA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IGUAPE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILHA COMPRIDA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILHA SOLTEIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ILHABELA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDAIATUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDIANA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INDIAPORA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'INUBIA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPAUCU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPERO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPEUNA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPIGUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPORANGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRACEMAPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAPUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IRAPURU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITABERA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJOBI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAJU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITANHAEM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAOCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPECERICA DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPETININGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPEVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPEVI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIRAPUA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPORANGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPUI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPURA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAQUAQUECETUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITARARE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITARIRI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITATINGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITIRAPINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITIRAPUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITOBI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUPEVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITUVERAVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABORANDI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JABOTICABAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACAREI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JACUPIRANGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAGUARIUNA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JALES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAMBEIRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JANDIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARDINOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JARINU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JERIQUARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOANOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOAO RAMALHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JOSE BONIFACIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JULIO MESQUITA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUMIRIM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUNDIAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUNQUEIROPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUQUIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUQUITIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOINHA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LARANJAL PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAVINIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAVRINHAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LEME',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LENCOIS PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIMEIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LINDOIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LINS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LORENA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LOURDES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LOUVEIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUCELIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUCIANOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUIS ANTONIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUIZIANIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUPERCIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUTECIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACATUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACAUBAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MACEDONIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAGDA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAIRINQUE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAIRIPORA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MANDURI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARABA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARACAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARAPOAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIAPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARILIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARINOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARTINOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MENDONCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MERIDIANO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MESOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIGUELOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MINEIROS DO TIETE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRA ESTRELA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRACATU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANDOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANTE DO PARANAPANEMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRASSOL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRASSOLANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOCOCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOGI DAS CRUZES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOGI GUACU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOGI-MIRIM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOMBUCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONCOES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONGAGUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALEGRE DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE ALTO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE APRAZIVEL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE AZUL PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE CASTELO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE MOR',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTEIRO LOBATO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORRO AGUDO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MORUNGABA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MOTUCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MURUTINGA DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NANTES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NARANDIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NATIVIDADE DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZARE PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NEVES PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NHANDEARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NIPOA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ALIANCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CAMPINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CANAA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA CASTILHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA EUROPA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA GRANADA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA GUATAPORANGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA INDEPENDENCIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA LUZITANIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ODESSA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVAIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO HORIZONTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NUPORANGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OCAUCU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLEO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIMPIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ONDA VERDE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORIENTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORINDIUVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ORLANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OSASCO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OSCAR BRESSANE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OSVALDO CRUZ',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURINHOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OURO VERDE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OUROESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PACAEMBU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALESTINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMARES PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRA D`OESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMITAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PANORAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAGUACU PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAIBUNA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAISO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAPANEMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANAPUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAPUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARDINHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARIQUERA-ACU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARISI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PATROCINIO PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULICEIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULINIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULISTANIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAULO DE FARIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDERNEIRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRA BELA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRANOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDREGULHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDREIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRINHAS PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO DE TOLEDO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PENAPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEREIRA BARRETO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEREIRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PERUIBE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIACATU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIEDADE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PILAR DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDAMONHANGABA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDORAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINHALZINHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIQUEROBI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIQUETE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRACAIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRACICABA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAJU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAJUI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRANGI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAPORA DO BOM JESUS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAPOZINHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRASSUNUNGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRATININGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PITANGUEIRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLANALTO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PLATINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POLONI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POMPEIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONGAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTALINDA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTES GESTAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POPULINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORANGABA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO FELIZ',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO FERREIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POTIM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'POTIRENDABA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRACINHA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRADOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRAIA GRANDE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRATANIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE ALVES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE BERNARDES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE EPITACIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE PRUDENTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE VENCESLAU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PROMISSAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUADRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUATA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUEIROZ',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUELUZ',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'QUINTANA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RAFARD',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RANCHARIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REDENCAO DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REGENTE FEIJO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REGINOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'REGISTRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RESTINGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO BONITO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO BRANCO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO CORRENTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO DOS INDIOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO GRANDE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO PIRES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIBEIRAO PRETO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIFAINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RINCAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RINOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO CLARO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DAS PEDRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO GRANDE DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIOLANDIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIVERSUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSANA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ROSEIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUBIACEA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RUBINEIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SABINO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAGRES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALES OLIVEIRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALESOPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALMOURAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTINHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO DE PIRAPORA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SALTO GRANDE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANDOVALINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ADELIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ALBERTINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BARBARA D`OESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA BRANCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CLARA D`OESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DA CONCEICAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DA ESPERANCA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DAS PALMEIRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA CRUZ DO RIO PARDO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ERNESTINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FE DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA GERTRUDES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ISABEL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA LUCIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MERCEDES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA D`OESTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DO PASSA QUATRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DE VITERBO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA SALETE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DA PONTE PENSA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTANA DE PARNAIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANASTACIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANDRE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DA ALEGRIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DE POSSE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO ARACANGUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO JARDIM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO ANTONIO DO PINHAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTO EXPEDITO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTOPOLIS DO AGUAPEI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO DO SAPUCAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BERNARDO DO CAMPO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CAETANO DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO CARLOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FRANCISCO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DA BOA VISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DAS DUAS PONTES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DE IRACEMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAO DO PAU D`ALHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOAQUIM DA BARRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DA BELA VISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO BARREIRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO RIO PARDO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DO RIO PRETO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO JOSE DOS CAMPOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LOURENCO DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO LUIS DO PARAITINGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MANUEL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL ARCANJO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PAULO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO PEDRO DO TURVO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO ROQUE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DA GRAMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SIMAO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VICENTE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SARAPUI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SARUTAIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEBASTIANOPOLIS DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA AZUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRA NEGRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERRANA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SERTAOZINHO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SETE BARRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SEVERINIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVEIRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOCORRO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SOROCABA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUD MENNUCCI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUMARE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUZANAPOLIS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUZANO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABAPUA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABATINGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TABOAO DA SERRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TACIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAGUAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAIACU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAIUVA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAMBAU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TANABI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPIRAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAPIRATIBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARAL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARITINGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARITUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAQUARIVAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TARABAI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TARUMA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TATUI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAUBATE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEJUPA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TEODORO SAMPAIO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TERRA ROXA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIETE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TIMBURI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TORRE DE PEDRA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TORRINHA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRABIJU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TREMEMBE',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TRES FRONTEIRAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUIUTI',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPI PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURIUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TURMALINA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBARANA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBATUBA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UBIRAJARA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UCHOA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'UNIAO PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URANIA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URU',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'URUPES',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALENTIM GENTIL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALINHOS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VALPARAISO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM GRANDE DO SUL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARGEM GRANDE PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VARZEA PAULISTA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VERA CRUZ',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VINHEDO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VIRADOURO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VISTA ALEGRE DO ALTO',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VITORIA BRASIL',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VOTORANTIM',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'VOTUPORANGA',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ZACARIAS',
      state_id: 26,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ABREULANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AGUIARNOPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALIANCA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALMAS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ALVORADA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANANAS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ANGICO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'APARECIDA DO RIO NEGRO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGOMINAS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUACEMA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUACU',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUAINA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUANA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAGUATINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARAPOEMA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ARRAIAS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AUGUSTINOPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AURORA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'AXIXA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BABACULANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BANDEIRANTES DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARRA DO OURO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BARROLANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BERNARDO SAYAO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BOM JESUS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BRASILANDIA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BREJINHO DE NAZARE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'BURITI DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CACHOEIRINHA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CAMPOS LINDOS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARIRI DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARMOLANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CARRASCO BONITO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CASEARA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CENTENARIO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADA DA NATIVIDADE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CHAPADA DE AREIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLINAS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COLMEIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COMBINADO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CONCEICAO DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'COUTO DE MAGALHAES',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRISTALANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'CRIXAS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DARCINOPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIANOPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DIVINOPOLIS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DOIS IRMAOS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'DUERE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ESPERANTINA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FATIMA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FIGUEIROPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FILADELFIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORMOSO DO ARAGUAIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'FORTALEZA DO TABOCAO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIANORTE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GOIATINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GUARAI',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'GURUPI',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'IPUEIRAS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITACAJA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAGUATINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPIRATINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'ITAPORA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JAU DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'JUARINA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DA CONFUSAO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAGOA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAJEADO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LAVANDEIRA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LIZARDA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'LUZINOPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MARIANOPOLIS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MATEIROS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MAURILANDIA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRACEMA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MIRANORTE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE DO CARMO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MONTE SANTO DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'MURICILANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NATIVIDADE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NAZARE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA OLINDA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVA ROSALANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO ACORDO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO ALEGRE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'NOVO JARDIM',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'OLIVEIRA DE FATIMA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMAS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRANTE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIRAS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PALMEIROPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARAISO DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PARANA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PAU D`ARCO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEDRO AFONSO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEIXE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PEQUIZEIRO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PINDORAMA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIRAQUE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PIUM',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE ALTA DO BOM JESUS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PONTE ALTA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO ALEGRE DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PORTO NACIONAL',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRAIA NORTE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PRESIDENTE KENNEDY',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'PUGMIL',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RECURSOLANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIACHINHO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DA CONCEICAO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO DOS BOIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'RIO SONO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAMPAIO',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANDOLANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA FE DO ARAGUAIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA MARIA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA RITA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA ROSA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SANTA TEREZINHA DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO BENTO DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO FELIX DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO MIGUEL DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SALVADOR DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO SEBASTIAO DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SAO VALERIO DA NATIVIDADE',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SILVANOPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SITIO NOVO DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'SUCUPIRA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAGUATINGA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TAIPAS DO TOCANTINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TALISMA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOCANTINIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TOCANTINOPOLIS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPIRAMA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'TUPIRATINS',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'WANDERLANDIA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {

      name: 'XAMBIOA',
      state_id: 27,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])),

  down: (queryInterface) => queryInterface.dropTable('cities'),
};
