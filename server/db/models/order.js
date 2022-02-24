'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    volume: DataTypes.STRING,
    length: DataTypes.STRING,
    width: DataTypes.STRING,
    heigth: DataTypes.STRING,
    weight: DataTypes.STRING,
    departureDate: DataTypes.STRING,
    destinationDate: DataTypes.STRING,
    price: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    cargoCost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};