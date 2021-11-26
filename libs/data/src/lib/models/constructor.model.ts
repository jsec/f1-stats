import { BaseModel } from './base.model';

export class Constructor extends BaseModel {
  constructor_id!: string;
  constructor_ref!: string;
  name!: string;
  nationality!: string;
  url!: string;

  static tableName = 'constructor';
}
