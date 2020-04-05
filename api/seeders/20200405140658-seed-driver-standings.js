'use strict';

const funcs = require('../scripts/seed-functions');

function createStanding(data) {
  return {
    id: parseInt(data.driverStandingsId),
    raceId: parseInt(data.raceId),
    driverId: parseInt(data.driverId),
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
    const driverStandings = funcs
      .loadData('data/driver_standings.csv')
      .map(data => createStanding(data));

    return queryInterface.bulkInsert('DriverStandings', driverStandings, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DriverStandings', null, {});
  },
};
