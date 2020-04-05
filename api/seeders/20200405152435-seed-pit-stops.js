'use strict';

const funcs = require('../scripts/seed-functions');

function createPitStop(data) {
  return {
    raceId: parseInt(data.raceId),
    driverId: parseInt(data.driverId),
    stop: parseInt(data.stop),
    lap: parseInt(data.lap),
    time: data.time,
    duration: parseFloat(data.duration),
    milliseconds: parseInt(data.milliseconds),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const pitStops = funcs
      .loadData('data/pit_stops.csv')
      .map(data => createPitStop(data));

    let i = 1;
    for (let j = 0; j < pitStops.length; j++) {
      pitStops[j].id = i;
      i++;
    }

    return queryInterface.bulkInsert('PitStops', pitStops, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PitStops', null, {});
  },
};
