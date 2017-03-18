'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      img_url: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
      return queryInterface.addIndex('items', ['category']);
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Items');
  }
};
