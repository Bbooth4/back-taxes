'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('posts', [
      {
        id: 1,
        url: 'https://www.google.ca',
        title: 'Google',
        description: 'A website for searching fun things.',
        createdAt: new Date(), 
        updatedAt: new Date(),
      },
      {
        id: 2,
        url: 'https://www.youtube.com',
        title: 'Youtube',
        description: 'A website for watching videos.',
        createdAt: new Date(), 
        updatedAt: new Date(),
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('posts', null, {});
  }
};
