import { Knex } from 'knex';
import { v4 } from 'uuid';
import {
  handleEscapedNulls,
  handleNullEscapedFloat,
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
      number: handleEscapedNulls(r.number, true),
      grid: parseInt(r.grid, 10),
      position: handleEscapedNulls(r.position, true),
      position_text: r.positionText,
      position_order: parseInt(r.positionOrder, 10),
      points: parseInt(r.points, 10),
      laps: parseInt(r.laps, 10),
      time: handleEscapedNulls(r.time, false),
      milliseconds: handleEscapedNulls(r.milliseconds, true),
      fastest_lap: handleEscapedNulls(r.fastestLap, true),
      rank: handleEscapedNulls(r.rank, true),
      fastest_lap_time: handleEscapedNulls(r.fastestLapTime, false),
      fastest_lap_speed: handleNullEscapedFloat(r.fastestLapSpeed),
      status_id: parseInt(r.statusId, 10)
    }))
  );

  await knex.batchInsert('race_result', records, 1000);
}
