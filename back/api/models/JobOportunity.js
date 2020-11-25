import Sequelize, { Model } from 'sequelize';

class JobOportunity extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      requirements: Sequelize.STRING,
      salary: Sequelize.STRING,
      active: Sequelize.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Company, {
      foreignKey: 'companyId',
      as: 'company',
    });
  }
}

export default JobOportunity;
