'use strict';
module.exports = function(sequelize, DataTypes) {
  var Design = sequelize.define('Design', {
    img_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Design.belongsToMany(models.Tag, {through: 'designs_tags'});
      }
    }
  });
  return Design;
};
