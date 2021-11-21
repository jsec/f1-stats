import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

const tableName = 'circuit';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable().defaultTo(uuidv4());
    t.integer('circuit_id').notNullable();
    t.string('circuit_ref').notNullable();
    t.string('name').notNullable();
    t.string('location').notNullable();
    t.string('country').notNullable();
    t.double('latitude').notNullable();
    t.double('longitude').notNullable();
    t.integer('altitude').notNullable();
    t.string('url').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
