import { BaseModel } from './base.model';

export class Qualifying extends BaseModel {
  qualifying_id!: number;
  race_id!: number;
  driver_id!: number;
  constructor_id!: number;
  number!: number;
  position!: number;
  q1!: string;
  q2!: string;
  q3!: string;

  static tableName = 'qualifying';
}
