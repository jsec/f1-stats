import { BaseModel } from "./base.model";

export class ConstructorStanding extends BaseModel {
  standing_id: number;
  race_id: number;
  constructor_id: number;
  points: number;
  position: number;
  position_text: string;
  wins: number;

  static tableName = 'constructor_standing';
}
