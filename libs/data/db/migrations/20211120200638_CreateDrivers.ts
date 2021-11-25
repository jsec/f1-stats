import { Knex } from 'knex';

const tableName = 'driver';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.uuid('id').notNullable();
    t.integer('driver_id').unique().notNullable();
    t.string('driver_ref').notNullable();
    t.integer('number');
    t.string('code');
    t.string('first_name').notNullable();
    t.string('last_name').notNullable();
    t.date('date_of_birth').notNullable();
    t.string('nationality').notNullable();
    t.string('url').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
