import { Knex } from 'knex';

const tableName = 'qualifying';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('qualifying_id').notNullable();
    t.integer('race_id').notNullable().references('race_id').inTable('race');
    t.integer('driver_id').notNullable().references('driver_id').inTable('driver');
    t.integer('constructor_id').notNullable().references('constructor_id').inTable('constructor');
    t.integer('number').notNullable();
    t.integer('position').notNullable();
    t.time('q1').notNullable();
    t.time('q2').notNullable();
    t.time('q3').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
