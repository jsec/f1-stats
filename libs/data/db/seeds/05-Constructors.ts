import { Knex } from 'knex';
import { v4 } from 'uuid';
import { loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('constructor').delete();

  const records = await loadData('constructors.csv', data =>
    data.map(r => ({
      id: v4(),
      constructor_id: parseInt(r.constructorId, 10),
      constructor_ref: r.constructorRef,
      name: r.name,
      nationality: r.nationality,
      url: r.url
    }))
  );

  await knex('constructor').insert(records);
}
