import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Constructor } from './constructor.model';
import { Race } from './race.model';

export class ConstructorStanding extends BaseModel {
  static tableName = 'constructor_standing';

  standingId!: number;
  race!: Race;
  carConstructor!: Constructor;
  points!: number;
  position!: number;
  positionText!: string;
  wins!: number;

  static relationMappings = {
    race: {
      relation: Model.HasOneRelation,
      modelClass: Race,
      join: {
        from: 'constructor_standing.race_id',
        to: 'race.race_id'
      }
    },
    carConstructor: {
      relation: Model.HasOneRelation,
      modelClass: Constructor,
      join: {
        from: 'constructor_standing.constructor_id',
        to: 'constructor.constructor_id'
      }
    }
  };
}
