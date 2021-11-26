import { parseISO } from 'date-fns';
import { Knex } from 'knex';
import { v4 } from 'uuid';
import { escapeNullInt, escapeNullString, loadData } from '../utils/seed.util';

export async function seed(knex: Knex): Promise<void> {
  await knex('driver').delete();

  const records = await loadData('drivers.csv', data =>
    data.map(r => ({
      id: v4(),
      driver_id: parseInt(r.driverId, 10),
      driver_ref: r.driverRef,
      number: escapeNullInt(r.number),
      code: escapeNullString(r.code),
      first_name: r.forename,
      last_name: r.surname,
      date_of_birth: parseISO(r.dob),
      nationality: r.nationality,
      url: r.url
    }))
  );

  await knex('driver').insert(records);
}
