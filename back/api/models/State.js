import Sequelize, { Model } from 'sequelize';

class State extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      initials: Sequelize.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Country, {
      foreignKey: 'countryId',
      as: 'country',
    });
  }
}

export default State;
