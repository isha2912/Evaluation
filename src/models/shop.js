'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shop.init({
    cat_name: DataTypes.STRING,
    item_id: DataTypes.STRING,
    feat_name: DataTypes.STRING,
    feat_value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};