'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('designs_tags', {
      design_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'designs',
          key: 'id'
        }
      },
      tag_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'tags',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('DesignsTags');
  }
};
