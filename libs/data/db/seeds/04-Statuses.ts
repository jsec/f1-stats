import { Knex } from 'knex';
import { v4 } from 'uuid';
import { loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('status').delete();

  const records = await loadData('status.csv', data =>
    data.map(r => ({
      id: v4(),
      status_id: parseInt(r.statusId, 10),
      status: r.status
    }))
  );

  await knex('status').insert(records);
}
