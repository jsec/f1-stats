import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Constructor } from './constructor.model';
import { Race } from '../race/race.model';
import { Status } from '../status/status.model';

@Table
export class ConstructorResult extends Model<ConstructorResult> {
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

  @ForeignKey(() => Status)
  @Column(DataType.SMALLINT)
  statusId: number;
}
