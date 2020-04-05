'use strict';

const funcs = require('../scripts/seed-functions');

function createStanding(data) {
  return {
    id: parseInt(data.constructorStandingsId),
    raceId: parseInt(data.raceId),
    constructorId: parseInt(data.constructorId),
    points: parseInt(data.points),
    position: parseInt(data.position),
    positionText: data.positionText,
    wins: parseInt(data.wins),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const standings = funcs
      .loadData('data/constructor_standings.csv')
      .map(data => createStanding(data));

    return queryInterface.bulkInsert('ConstructorStandings', standings, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ConstructorStandings', null, {});
  },
};
