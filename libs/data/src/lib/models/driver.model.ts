import { BaseModel } from './base.model';

export class DriverModel extends BaseModel {
  driver_id: number;
  driver_ref: string;
  number: number;
  code: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  nationality: string;
  url: string;

  static tableName = 'driver';
}
