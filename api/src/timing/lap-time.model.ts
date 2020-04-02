import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Constructor } from '../constructor/constructor.model';
import { Race } from '../race/race.model';

@Table
export class LapTime extends Model<LapTime> {
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
  lap: number;

  @Column(DataType.SMALLINT)
  position: number;

  @Column(DataType.TIME)
  time: Date;

  @Column(DataType.INTEGER)
  milliseconds: number;
}
