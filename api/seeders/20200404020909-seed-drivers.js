'use strict';

const funcs = require('../scripts/seed-functions');

function createDriver(data) {
  return {
    id: data.driverId,
    ref: data.driverRef,
    number: parseInt(data.number) || null,
    code: data.code,
    firstName: data.forename,
    lastName: data.surname,
    dob: data.dob,
    nationality: data.nationality,
    url: data.url,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const drivers = funcs
      .loadData('data/drivers.csv')
      .map(data => createDriver(data));

    return queryInterface.bulkInsert('Drivers', drivers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drivers', null, {});
  },
};
