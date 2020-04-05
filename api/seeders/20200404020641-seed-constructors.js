'use strict';

const funcs = require('../scripts/seed-functions');

function createConstructor(data) {
  return {
    id: data.constructorId,
    ref: data.constructorRef,
    name: data.name,
    nationality: data.nationality,
    url: data.url,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const constructors = funcs
      .loadData('data/constructors.csv')
      .map(data => createConstructor(data));

    return queryInterface.bulkInsert('Constructors', constructors, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Constructors', null, {});
  },
};
