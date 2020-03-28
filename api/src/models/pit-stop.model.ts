import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Driver } from 'src/models/driver.model';
import { Race } from './race.model';

@Table
export class PitStop extends Model<PitStop> {
  @PrimaryKey
  @Column(DataType.SMALLINT)
  id: number;

  @ForeignKey(() => Race)
  @Column(DataType.SMALLINT)
  raceId: number;

  @ForeignKey(() => Driver)
  @Column(DataType.SMALLINT)
  driverId: number;

  @Column(DataType.SMALLINT)
  stop: number;

  @Column(DataType.SMALLINT)
  lap: number;

  @Column(DataType.TIME)
  time: Date;

  @Column(DataType.REAL)
  duration: number;

  @Column(DataType.INTEGER)
  milliseconds: number;
}
