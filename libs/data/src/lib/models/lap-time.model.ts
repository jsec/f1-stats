import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Driver } from './driver.model';
import { Race } from './race.model';

export class LapTime extends BaseModel {
  static tableName = 'lap_time';

  race!: Race;
  driver!: Driver;
  lap!: number;
  position!: number;
  time!: string;
  milliseconds!: number;

  static relationMappings = {
    race: {
      relation: Model.HasOneRelation,
      modelClass: Race,
      join: {
        from: 'pit_stop.race_id',
        to: 'race.race_id'
      }
    },
    driver: {
      relation: Model.HasOneRelation,
      modelClass: Driver,
      join: {
        from: 'pit_stop.driver_id',
        to: 'driver.driver_id'
      }
    }
  };
}
