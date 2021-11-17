import { BaseModel } from './base.model';

export class SeasonModel extends BaseModel {
  year: number;
  url: string;

  static tableName = 'season';
}
