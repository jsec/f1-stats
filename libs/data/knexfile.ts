import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../../.env') });

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: 'db/migrations',
    stub: 'db/migration.stub.ts'
  },
  seeds: {
    directory: 'db/seeds',
    stub: 'db/seed.stub.ts'
  },
  ...knexSnakeCaseMappers
} as Knex.Config;
