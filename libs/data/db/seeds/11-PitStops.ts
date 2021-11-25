import { Knex } from 'knex';
import { v4 } from 'uuid';
import { loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('pit_stop').delete();

  const records = await loadData('pit_stops.csv', data =>
    data.map(r => ({
      id: v4(),
      race_id: parseInt(r.raceId, 10),
      driver_id: parseInt(r.driverId, 10),
      stop: parseInt(r.stop, 10),
      lap: parseInt(r.lap, 10),
      time: r.time,
      duration: parseInt(r.duration, 10),
      milliseconds: parseInt(r.milliseconds, 10)
    }))
  );

  await knex.batchInsert('pit_stop', records, 1000);
}
