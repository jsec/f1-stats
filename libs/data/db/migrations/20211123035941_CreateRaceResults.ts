import { Knex } from 'knex';

const tableName = 'race_result';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('result_id').notNullable();
    t.integer('race_id').notNullable().references('race_id').inTable('race');
    t.integer('driver_id')
      .notNullable()
      .references('driver_id')
      .inTable('driver');
    t.integer('constructor_id')
      .notNullable()
      .references('constructor_id')
      .inTable('constructor');
    t.integer('number');
    t.integer('grid').notNullable();
    t.integer('position');
    t.string('position_text').notNullable();
    t.integer('position_order').notNullable();
    t.integer('points').notNullable();
    t.integer('laps').notNullable();
    t.string('time');
    t.bigInteger('milliseconds');
    t.integer('fastest_lap');
    t.integer('rank');
    t.time('fastest_lap_time');
    t.double('fastest_lap_speed');
    t.integer('status_id')
      .notNullable()
      .references('status_id')
      .inTable('status');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
