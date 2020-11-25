import Sequelize, { Model } from 'sequelize';

class Company extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      cnpj: Sequelize.STRING,
      phone: Sequelize.STRING,
      active: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });
  }
}

export default Company;
