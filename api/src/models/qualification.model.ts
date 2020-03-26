import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Constructor } from 'src/models/constructor.model';
import { Driver } from 'src/models/driver.model';
import { Race } from './race.model';

@Table
export class Qualification extends Model<Qualification> {
  @Column(DataType.SMALLINT)
  @PrimaryKey
  id: number;

  @Column(DataType.SMALLINT)
  @ForeignKey(() => Race)
  raceId: number;

  @Column(DataType.SMALLINT)
  @ForeignKey(() => Driver)
  driverId: number;

  @Column(DataType.SMALLINT)
  @ForeignKey(() => Constructor)
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
