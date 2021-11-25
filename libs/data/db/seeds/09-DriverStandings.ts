import { Knex } from 'knex';
import { v4 } from 'uuid';
import { loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('driver_standing').delete();

  const records = await loadData('driver_standings.csv', data =>
    data.map(r => ({
      id: v4(),
      standing_id: parseInt(r.driverStandingsId, 10),
      race_id: parseInt(r.raceId, 10),
      driver_id: parseInt(r.driverId, 10),
      points: parseInt(r.points, 10),
      position: parseInt(r.position, 10),
      position_text: r.positionText,
      wins: parseInt(r.wins, 10)
    }))
  );

  await knex.batchInsert('driver_standing', records, 1000);
}
