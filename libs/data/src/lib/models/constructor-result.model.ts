import { BaseModel } from './base.model';

export class ConstructorResult extends BaseModel {
  result_id: number;
  race_id: number;
  constructor_id: number;
  points: number;
  status: string;

  static tableName = 'constructor_result';
}
