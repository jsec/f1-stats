import { Knex } from 'knex';
import { v4 } from 'uuid';
import { handleEscapedNulls, loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('qualifying').delete();

  const records = await loadData('qualifying.csv', data =>
    data.map(r => ({
      id: v4(),
      qualifying_id: parseInt(r.qualifyId, 10),
      race_id: parseInt(r.raceId, 10),
      driver_id: parseInt(r.driverId, 10),
      constructor_id: parseInt(r.constructorId, 10),
      number: parseInt(r.number, 10),
      position: parseInt(r.position, 10),
      q1: handleEscapedNulls(r.q1, false),
      q2: handleEscapedNulls(r.q2, false),
      q3: handleEscapedNulls(r.q3, false)
    }))
  );

  await knex.batchInsert('qualifying', records, 1000);
}
