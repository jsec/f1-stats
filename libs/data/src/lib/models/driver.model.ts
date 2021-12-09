import { BaseModel } from './base.model';

export class Driver extends BaseModel {
  static tableName = 'driver';

  driverId!: number;
  driverRef!: string;
  number!: number;
  code!: string;
  firstName!: string;
  lastName!: string;
  dateOfBirth!: Date;
  nationality!: string;
  url!: string;
}
