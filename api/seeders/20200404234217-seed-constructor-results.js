'use strict';

const funcs = require('../scripts/seed-functions');

function createResult(data) {
  return {
    id: parseInt(data.constructorResultsId),
    raceId: parseInt(data.raceId),
    constructorId: parseInt(data.constructorId),
    points: parseInt(data.points),
    statusId: parseInt(data.status) || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const results = funcs
      .loadData('data/constructor_results.csv')
      .map(data => createResult(data));

    return queryInterface.bulkInsert('ConstructorResults', results, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ConstructorResults', null, {});
  },
};
