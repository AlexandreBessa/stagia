import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init({
      street: Sequelize.STRING,
      zipCode: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.City, {
      foreignKey: 'cityId',
      as: 'city',
    });
  }
}

export default Address;
