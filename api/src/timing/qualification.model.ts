import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Constructor } from '../constructor/constructor.model';
import { Driver } from '../driver/driver.model';
import { Race } from '../race/race.model';

@Table
export class Qualification extends Model<Qualification> {
  @PrimaryKey
  @Column(DataType.SMALLINT)
  id: number;

  @ForeignKey(() => Race)
  @Column(DataType.SMALLINT)
  raceId: number;

  @ForeignKey(() => Driver)
  @Column(DataType.SMALLINT)
  driverId: number;

  @ForeignKey(() => Constructor)
  @Column(DataType.SMALLINT)
  constructorId: number;

  @Column(DataType.SMALLINT)
  number: number;

  @Column(DataType.DATE)
  q1: Date;

  @Column(DataType.DATE)
  q2: Date;

  @Column(DataType.DATE)
  q3: Date;
}