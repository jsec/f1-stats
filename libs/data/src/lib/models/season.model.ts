import { BaseModel } from './base.model';

export class Season extends BaseModel {
  year!: number;
  url!: string;

  static tableName = 'season';
}
