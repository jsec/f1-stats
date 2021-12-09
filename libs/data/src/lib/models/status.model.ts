import { BaseModel } from './base.model';

export class Status extends BaseModel {
  static tableName = 'status';

  status_id!: number;
  status!: string;
}
