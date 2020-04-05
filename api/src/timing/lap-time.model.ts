import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Driver } from '../driver/driver.model';
import { Race } from '../race/race.model';

@Table
export class LapTime extends Model<LapTime> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Race)
  @Column(DataType.SMALLINT)
  raceId: number;

  @ForeignKey(() => Driver)
  @Column(DataType.SMALLINT)
  driverId: number;

  @Column(DataType.SMALLINT)
  lap: number;

  @Column(DataType.SMALLINT)
  position: number;

  @Column(DataType.TIME)
  time: Date;

  @Column(DataType.INTEGER)
  milliseconds: number;
}
