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
import { Status } from './status.model';

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

  @Column(DataType.SMALLINT)
  grid: number;

  @Column(DataType.SMALLINT)
  position: number;

  @Column(DataType.STRING)
  positionText: string;

  @Column(DataType.SMALLINT)
  positionOrder: number;

  @Column(DataType.SMALLINT)
  points: number;

  @Column(DataType.SMALLINT)
  laps: number;

  @Column(DataType.DATE)
  time: Date;

  @Column(DataType.BIGINT)
  milliseconds: number;

  @Column(DataType.SMALLINT)
  fastestLap: number;

  @Column(DataType.SMALLINT)
  fastestLapRank: number;

  @Column(DataType.DATE)
  fastestLapTime: Date;

  @Column(DataType.REAL)
  fastestLapSpeed: number;

  @Column(DataType.SMALLINT)
  @ForeignKey(() => Status)
  statusId: number;
}
