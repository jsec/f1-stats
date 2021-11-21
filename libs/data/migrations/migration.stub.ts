import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

const tableName = '';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable().defaultTo(uuidv4());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
