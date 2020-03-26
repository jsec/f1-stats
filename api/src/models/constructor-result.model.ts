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
import { Status } from './status.model';

@Table
export class ConstructorResult extends Model<ConstructorResult> {
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
  @ForeignKey(() => Status)
  statusId: number;
}
