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
import { Race } from './race.model';
import { Status } from '../status/status.model';

@Table
export class RaceResult extends Model<RaceResult> {
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

  @ForeignKey(() => Status)
  @Column(DataType.SMALLINT)
  statusId: number;
}
