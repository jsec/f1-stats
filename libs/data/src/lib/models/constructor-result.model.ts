import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Constructor } from './constructor.model';
import { Race } from './race.model';

export class ConstructorResult extends BaseModel {
  static tableName = 'constructor_result';

  resultId!: number;
  race!: Race;
  carConstructor!: Constructor;
  points!: number;
  status!: string;

  static relationMappings = {
    race: {
      relation: Model.HasOneRelation,
      modelClass: Race,
      join: {
        from: 'constructor_result.race_id',
        to: 'race.race_id'
      }
    },
    carConstructor: {
      relation: Model.HasOneRelation,
      modelClass: Constructor,
      join: {
        from: 'constructor_result.constructor_id',
        to: 'constructor.constructor_id'
      }
    }
  };
}
