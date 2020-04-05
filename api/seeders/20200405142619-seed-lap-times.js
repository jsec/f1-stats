'use strict';

const funcs = require('../scripts/seed-functions');

function createLapTime(data) {
  return {
    raceId: parseInt(data.raceId),
    driverId: parseInt(data.driverId),
    lap: parseInt(data.lap),
    position: parseInt(data.position),
    time: data.time,
    milliseconds: parseInt(data.milliseconds),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const lapTimes = funcs
      .loadData('data/lap_times.csv')
      .map(data => createLapTime(data));

    let i = 1;
    for (let j = 0; j < lapTimes.length; j++) {
      lapTimes[j].id = i;
      i++;
    }

    return queryInterface.bulkInsert('LapTimes', lapTimes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LapTimes', null, {});
  },
};
