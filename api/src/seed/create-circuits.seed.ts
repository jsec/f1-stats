import * as csv from 'csv-parser';
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Circuit } from '../circuit/circuit.entity';
import { createReadStream } from 'fs';

export default class CreateCircuits implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const circuits: Circuit[] = (await this.loadCircuits()).map(circuit => this.createCircuit(circuit));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Circuit)
      .values(circuits)
      .execute();
  }

  private loadCircuits(): Promise<any[]> {
    const results = [];

    const stream = createReadStream('src/seed/data/circuits.csv')
      .pipe(csv())
      .on('data', (data: any) => results.push(data));

    return new Promise((resolve, reject) => {
      stream.on('end', () => resolve(results));
      stream.on('error', reject);
    });
  }

  private createCircuit(circuit: any): Circuit {
    const entity: Circuit = new Circuit();
    entity.id = circuit.circuitId;
    entity.ref = circuit.circuitRef;
    entity.alt = circuit.alt;
    entity.url = circuit.url;
    entity.city = circuit.location;
    entity.country = circuit.country;
    entity.latitude = circuit.lat;
    entity.longitude = circuit.lng;
    entity.name = circuit.name;

    return entity;
  }
}
