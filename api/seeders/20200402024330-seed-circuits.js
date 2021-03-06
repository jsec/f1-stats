'use strict';

const funcs = require('../scripts/seed-functions');

function createCircuit(data) {
  return {
    id: parseInt(data.circuitId),
    ref: data.circuitRef,
    name: data.name,
    city: data.location,
    country: data.country,
    latitude: parseFloat(data.lat),
    longitude: parseFloat(data.lng),
    alt: data.alt,
    url: data.url,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const circuits = funcs
      .loadData('data/circuits.csv')
      .map(data => createCircuit(data));

    return queryInterface.bulkInsert('Circuits', circuits, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Circuits', null, {});
  },
};
