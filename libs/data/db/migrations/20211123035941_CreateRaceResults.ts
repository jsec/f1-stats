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
    t.integer('number').notNullable();
    t.integer('grid').notNullable();
    t.integer('position').notNullable();
    t.string('position_text').notNullable();
    t.integer('position_order').notNullable();
    t.integer('points').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
