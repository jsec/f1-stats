import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import * as dotenv from 'dotenv';

dotenv.config();


module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: 'migrations',
    stub: 'migrations/migration.stub.ts'
  },
  seeds: {
    directory: 'seeds',
    stub: 'seeds/seed.stub.ts'
  },
  ...knexSnakeCaseMappers
} as Knex.Config;
