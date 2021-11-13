import { BaseModel } from "./base.model";

export class RaceModel extends BaseModel {
  race_id: number;
  year: number;
  round: number;
  circuit_id: number;
  name: string;
  date: string;
  time: string;
  url: string;

  static tableName = 'race';
}
