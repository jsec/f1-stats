import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Constructor } from './constructor.model';
import { Race } from './race.model';

@Table
export class DriverStanding extends Model<DriverStanding> {
  @PrimaryKey
  @Column(DataType.SMALLINT)
  id: number;

  @ForeignKey(() => Race)
  @Column(DataType.SMALLINT)
  raceId: number;

  @ForeignKey(() => Constructor)
  @Column(DataType.SMALLINT)
  constructorId: number;

  @Column(DataType.SMALLINT)
  points: number;

  @Column(DataType.SMALLINT)
  position: number;

  @Column(DataType.STRING)
  positionText: string;

  @Column(DataType.BOOLEAN)
  win: boolean;
}
