import { Knex } from 'knex';

const tableName = 'constructor';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('constructor_id').unique().notNullable();
    t.string('constructor_ref').notNullable();
    t.string('name').notNullable();
    t.string('nationality').notNullable();
    t.string('url').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
