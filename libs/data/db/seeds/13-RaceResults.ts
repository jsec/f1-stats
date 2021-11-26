import { Knex } from 'knex';
import { v4 } from 'uuid';
import {
  escapeNullFloat,
  escapeNullInt,
  escapeNullString,
  loadData
} from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('race_result').delete();

  const records = await loadData('results.csv', data =>
    data.map(r => ({
      id: v4(),
      result_id: parseInt(r.resultId, 10),
      race_id: parseInt(r.raceId, 10),
      driver_id: parseInt(r.driverId, 10),
      constructor_id: parseInt(r.constructorId, 10),
      number: escapeNullInt(r.number),
      grid: parseInt(r.grid, 10),
      position: escapeNullInt(r.position),
      position_text: r.positionText,
      position_order: parseInt(r.positionOrder, 10),
      points: parseInt(r.points, 10),
      laps: parseInt(r.laps, 10),
      time: escapeNullString(r.time),
      milliseconds: escapeNullInt(r.milliseconds),
      fastest_lap: escapeNullInt(r.fastestLap),
      rank: escapeNullInt(r.rank),
      fastest_lap_time: escapeNullString(r.fastestLapTime),
      fastest_lap_speed: escapeNullFloat(r.fastestLapSpeed),
      status_id: parseInt(r.statusId, 10)
    }))
  );

  await knex.batchInsert('race_result', records, 1000);
}
