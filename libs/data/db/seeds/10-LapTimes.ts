import { Knex } from 'knex';
import { v4 } from 'uuid';
import { loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('lap_time').delete();

  const records = await loadData('lap_times.csv', data =>
    data.map(r => ({
      id: v4(),
      race_id: parseInt(r.raceId, 10),
      driver_id: parseInt(r.driverId, 10),
      lap: parseInt(r.lap, 10),
      position: parseInt(r.position, 10),
      time: r.time,
      milliseconds: parseInt(r.milliseconds, 10)
    }))
  );

  await knex.batchInsert('lap_time', records, 1000);
}
