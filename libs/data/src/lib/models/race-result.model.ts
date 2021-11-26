import { BaseModel } from './base.model';

export class RaceResult extends BaseModel {
  result_id!: number;
  race_id!: number;
  driver_id!: number;
  constructor_id!: number;
  number!: number;
  grid!: number;
  position!: number;
  position_text!: string;
  position_order!: number;
  points!: number;
  laps!: number;
  time!: string;
  milliseconds!: number;
  fastest_lap!: number;
  rank!: number;
  fastest_lap_time!: string;
  fastest_lap_speed!: number;
  status_id!: number;

  static tableName = 'race_result';
}
