import { Knex } from 'knex';

const tableName = 'constructor_result';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('result_id').notNullable();
    t.integer('race_id').notNullable().references('race_id').inTable('race');
    t.integer('constructor_id')
      .notNullable()
      .references('constructor_id')
      .inTable('constructor');
    t.double('points').notNullable();
    t.string('status').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
