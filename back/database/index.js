import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Company from '../api/models/Company';
import JobOportunity from '../api/models/JobOportunity';
import City from '../api/models/City';
import State from '../api/models/State';
import Country from '../api/models/Country';
import Address from '../api/models/Address';

const models = [Company, JobOportunity, City, State, Country, Address];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.forEach((model) => model.init(this.connection));

    models.forEach((model) => {
      model.associate && model.associate(this.connection.models);
    });
  }
}

export default new DataBase();
