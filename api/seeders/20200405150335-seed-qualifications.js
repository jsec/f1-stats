'use strict';

const funcs = require('../scripts/seed-functions');

function createQualification(data) {
  return {
    id: parseInt(data.qualifyId),
    raceId: parseInt(data.raceId),
    driverId: parseInt(data.driverId),
    constructorId: parseInt(data.constructorId),
    number: parseInt(data.number),
    position: parseInt(data.position),
    q1: funcs.handleEscapedNulls(data.q1),
    q2: funcs.handleEscapedNulls(data.q2),
    q3: funcs.handleEscapedNulls(data.q3),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const qualifications = funcs
      .loadData('data/qualifying.csv')
      .map(data => createQualification(data));

    return queryInterface.bulkInsert('Qualifications', qualifications, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Qualifications', null, {});
  },
};
