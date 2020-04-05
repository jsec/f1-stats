'use strict';

const funcs = require('../scripts/seed-functions');

function createRace(data) {
  return {
    id: parseInt(data.raceId),
    year: parseInt(data.year),
    round: parseInt(data.round),
    circuitId: parseInt(data.circuitId),
    name: data.name,
    date: data.date,
    time: data.time === '\\N' ? null : data.time,
    url: data.url,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const races = funcs
      .loadData('data/races.csv')
      .map(data => createRace(data));

    return queryInterface.bulkInsert('Races', races, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Races', null, {});
  },
};
