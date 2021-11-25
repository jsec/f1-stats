import { Knex } from 'knex';
import { v4 } from 'uuid';
import { handleEscapedNulls, loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('constructor_result').delete();

  const records = await loadData('constructor_results.csv', data =>
    data.map(r => ({
      id: v4(),
      result_id: parseInt(r.constructorResultsId, 10),
      race_id: parseInt(r.raceId, 10),
      constructor_id: parseInt(r.constructorId, 10),
      points: parseInt(r.points, 10),
      status: handleEscapedNulls(r.status, false)
    }))
  );

  await knex.batchInsert('constructor_result', records, 1000);
}
