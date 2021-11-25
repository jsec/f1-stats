import { Knex } from 'knex';
import { v4 } from 'uuid';
import { loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('season').delete();

  const records = await loadData('seasons.csv', data =>
    data.map(r => ({
      id: v4(),
      year: parseInt(r.year, 10),
      url: r.url
    }))
  );

  await knex('season').insert(records);
}
