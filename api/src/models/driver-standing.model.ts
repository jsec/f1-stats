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
  @Column(DataType.SMALLINT)
  @PrimaryKey
  id: number;

  @Column(DataType.SMALLINT)
  @ForeignKey(() => Race)
  raceId: number;

  @Column(DataType.SMALLINT)
  @ForeignKey(() => Constructor)
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
