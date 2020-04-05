'use strict';

const funcs = require('../scripts/seed-functions');
const fs = require('fs');

function createResult(data) {
  return {
    id: parseInt(data.resultId),
    raceId: parseInt(data.raceId),
    driverId: parseInt(data.driverId),
    constructorId: parseInt(data.constructorId),
    number: parseInt(data.number) || null,
    grid: parseInt(data.grid) || null,
    position: parseInt(data.position) || null,
    positionText: data.positionText,
    positionOrder: parseInt(data.positionOrder) || null,
    points: parseInt(data.points),
    laps: parseInt(data.laps),
    time: funcs.handleEscapedNulls(data.time),
    milliseconds: parseInt(data.milliseconds) || null,
    fastestLap: parseInt(data.fastestLap) || null,
    fastestLapRank: parseInt(data.rank) || null,
    fastestLapTime: funcs.handleEscapedNulls(data.fastestLapTime),
    fastestLapSpeed: parseFloat(data.fastestLapSpeed) || null,
    statusId: parseInt(data.statusId),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const results = funcs
      .loadData('data/results.csv')
      .map(data => createResult(data));

    return queryInterface.bulkInsert('RaceResults', results, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RaceResults', null, {});
  },
};
