import { BaseModel } from './base.model';

export class LapTime extends BaseModel {
  race_id: number;
  driver_id: number;
  lap: number;
  position: number;
  time: string;
  milliseconds: number;

  static tableName = 'lap_time';
}
