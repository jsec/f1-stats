import { Knex } from 'knex';

const tableName = 'race';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('race_id').unique().notNullable();
    t.integer('year').notNullable();
    t.integer('round').notNullable();
    t.integer('circuit_id')
      .references('circuit_id')
      .inTable('circuit')
      .notNullable();
    t.string('name').notNullable();
    t.date('date').notNullable();
    t.time('time');
    t.string('url').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
