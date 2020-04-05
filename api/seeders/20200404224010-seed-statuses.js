'use strict';

const funcs = require('../scripts/seed-functions');

function createStatus(data) {
  return {
    id: parseInt(data.statusId),
    status: data.status,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const statuses = funcs
      .loadData('data/status.csv')
      .map(data => createStatus(data));

    return queryInterface.bulkInsert('Statuses', statuses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', null, {});
  },
};
