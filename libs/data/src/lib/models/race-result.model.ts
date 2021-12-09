import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Constructor } from './constructor.model';
import { Driver } from './driver.model';
import { Race } from './race.model';
import { Status } from './status.model';

export class RaceResult extends BaseModel {
  static tableName = 'race_result';

  resultId!: number;
  race!: Race;
  driver!: Driver;
  carConstructor!: Constructor;
  number!: number;
  grid!: number;
  position!: number;
  positionText!: string;
  positionString!: number;
  points!: number;
  laps!: number;
  time!: string;
  milliseconds!: number;
  fastestLap!: number;
  rank!: number;
  fastestLapTime!: string;
  fastestLapSpeed!: number;
  status!: Status;

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
    },
    status: {
      relation: Model.HasOneRelation,
      modelClass: Status,
      join: {
        from: 'race_result.status_id',
        to: 'status.status_id'
      }
    }
  };
}
