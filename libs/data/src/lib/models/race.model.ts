import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Circuit } from './circuit.model';

export class Race extends BaseModel {
  static tableName = 'race';

  race_id!: number;
  year!: number;
  round!: number;
  circuit_id!: number;
  name!: string;
  date!: string;
  time!: string;
  url!: string;

  static relationMappings = {
    circuit: {
      relation: Model.HasOneRelation,
      modelClass: Circuit,
      join: {
        from: 'race.circuit_id',
        to: 'circuit.circuit_id'
      }
    }
  };
}
