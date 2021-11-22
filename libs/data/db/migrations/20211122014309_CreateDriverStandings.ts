import { Knex } from 'knex';

const tableName = 'driver_standing';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('standing_id').notNullable();
    t.integer('race_id').notNullable().references('race_id').inTable('race');
    t.integer('driver_id')
      .notNullable()
      .references('driver_id')
      .inTable('driver');
    t.double('points').notNullable();
    t.integer('position').notNullable();
    t.string('position_text').notNullable();
    t.integer('wins').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
