import { BaseModel } from "./base.model";

export class PitStop extends BaseModel {
  race_id: string;
  driver_id: string;
  stop: number;
  lap: number;
  time: string;
  duration: number;
  milliseconds: number;

  static tableName = 'pit_stop';
}
