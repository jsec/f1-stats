import { BaseModel } from "./base.model";

export class Status extends BaseModel {
  status_id: number;
  status: string;

  static tableName = 'status';
}
