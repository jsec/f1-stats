import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Constructor } from './constructor.model';
import { Driver } from './driver.model';
import { Race } from './race.model';

export class Qualifying extends BaseModel {
  static tableName = 'qualifying';

  qualifyingId!: number;
  race!: Race;
  driver!: Driver;
  carConstructor!: Constructor;
  number!: number;
  position!: number;
  q1!: string;
  q2!: string;
  q3!: string;

  static relationMappings = {
    race: {
      relation: Model.HasOneRelation,
      modelClass: Race,
      join: {
        from: 'race_result.race_id',
        to: 'race.race_id'
      }
    },
    driver: {
      relation: Model.HasOneRelation,
      modelClass: Driver,
      join: {
        from: 'race_result.driver_id',
        to: 'driver.driver_id'
      }
    },
    carConstructor: {
      relation: Model.HasOneRelation,
      modelClass: Constructor,
      join: {
        from: 'race_result.constructor_id',
        to: 'constructor.constructor_id'
      }
    }
  };
}
