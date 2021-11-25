import { Knex } from 'knex';

const tableName = 'lap_time';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('race_id').notNullable().references('race_id').inTable('race');
    t.integer('driver_id')
      .notNullable()
      .references('driver_id')
      .inTable('driver');
    t.integer('lap').notNullable();
    t.integer('position').notNullable();
    t.time('time').notNullable();
    t.integer('milliseconds').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
