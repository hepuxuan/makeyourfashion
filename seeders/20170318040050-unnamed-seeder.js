'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [{
      name: 'shirt1',
      description: 'some awesome shirt',
      img_url: 'http://image1.spreadshirtmedia.com/image-server/v1/productTypes/812/views/1/appearances/92?width=200&height=200&mediaType=webp',
      category: 'men',
      price: 15.00,
      createdAt: '2017-03-18 04:02:47',
      updatedAt: '2017-03-18 04:02:47'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
