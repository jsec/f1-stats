import { parseISO } from 'date-fns';
import { Knex } from 'knex';
import { v4 } from 'uuid';
import { escapeNullString, loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('race').delete();

  const records = await loadData('races.csv', data =>
    data.map(r => ({
      id: v4(),
      race_id: parseInt(r.raceId, 10),
      year: parseInt(r.year, 10),
      round: parseInt(r.round, 10),
      circuit_id: parseInt(r.circuitId, 10),
      name: r.name,
      date: parseISO(r.date),
      time: escapeNullString(r.time),
      url: r.url
    }))
  );

  await knex('race').insert(records);
}
