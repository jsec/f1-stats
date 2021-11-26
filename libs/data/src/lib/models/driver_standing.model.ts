import { BaseModel } from './base.model';

export class DriverStanding extends BaseModel {
  standing_id!: number;
  race_id!: number;
  driver_id!: number;
  points!: number;
  position!: number;
  position_text!: string;
  wins!: number;

  static tableName = 'driver_standing';
}
