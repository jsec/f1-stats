import { Knex } from "knex";

export async function seed(knex: Knex): Promise<any> {
  await knex('season').delete();
}
