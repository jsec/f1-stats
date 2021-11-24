import { Knex } from 'knex';
import { v4 } from 'uuid';
import { loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('circuit').delete();

  const records = await loadData('circuits.csv', data =>
    data.map(r => ({
      id: v4(),
      circuit_id: parseInt(r.circuitId, 10),
      circuit_ref: r.circuitRef,
      name: r.name,
      location: r.location,
      country: r.location,
      latitude: parseFloat(r.lat),
      longitude: parseFloat(r.lng),
      altitude: parseInt(r.alt, 10),
      url: r.url
    }))
  );

  await knex('circuit').insert(records);
}
