import { BaseModel } from './base.model';

export class Circuit extends BaseModel {
  static tableName = 'circuit';

  circuitId!: number;
  circuitRef!: string;
  name!: string;
  location!: string;
  country!: string;
  latitude!: number;
  longitude!: number;
  altitude!: number;
  url!: string;
}
