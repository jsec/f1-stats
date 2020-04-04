'use strict';

const funcs = require('../scripts/seed-functions');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seasons = funcs.loadData('data/seasons.csv');

    let i = 1;
    for (let j = 0; j < seasons.length; j++) {
      const season = seasons[j];
      season.id = i;
      season.createdAt = new Date();
      season.updatedAt = new Date();
      i++;
    }

    return queryInterface.bulkInsert('Seasons', seasons, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seasons', null, {});
  },
};
