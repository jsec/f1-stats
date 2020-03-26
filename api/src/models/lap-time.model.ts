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
export class LapTime extends Model<LapTime> {
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
  lap: number;

  @Column(DataType.SMALLINT)
  position: number;

  @Column(DataType.TIME)
  time: Date;

  @Column(DataType.INTEGER)
  milliseconds: number;
}
