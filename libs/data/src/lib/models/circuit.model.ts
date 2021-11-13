import { BaseModel } from "./base.model";

export class Circuit extends BaseModel {
  circuit_id: number;
  circuit_ref: string;
  name: string;
  location: string;
  country: string;
  latitude: number;
  longitude: number;
  altitude: number;
  url: string;

  static tableName = 'circuit';
}
