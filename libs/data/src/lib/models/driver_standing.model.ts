import { Model } from 'objection';
import { BaseModel } from './base.model';
import { Driver } from './driver.model';
import { Race } from './race.model';

export class DriverStanding extends BaseModel {
  static tableName = 'driver_standing';

  standingId!: number;
  race!: Race;
  driver!: Driver;
  points!: number;
  position!: number;
  positionText!: string;
  wins!: number;

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
