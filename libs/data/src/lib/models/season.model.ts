import { BaseModel } from './base.model';

export class Season extends BaseModel {
  static tableName = 'season';

  year!: number;
  url!: string;
}
