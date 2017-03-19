module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    img_url: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Item
}
