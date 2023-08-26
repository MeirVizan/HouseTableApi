'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    calculateRisk() {
      let risk = this.loanAmount / this.currentValue;
      if (risk > 0.5) {
        risk += 0.1;
      }
      this.risk = Math.min(risk, 1); // Ensure risk is between 0 and 1
    };
  }
  House.init({
    address: DataTypes.STRING,
    currentValue: DataTypes.FLOAT,
    loanAmount: DataTypes.FLOAT,
    risk: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};