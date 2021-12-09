import { BaseModel } from './base.model';

export class Constructor extends BaseModel {
  static tableName = 'constructor';

  constructorId!: string;
  constructorRef!: string;
  name!: string;
  nationality!: string;
  url!: string;
}
