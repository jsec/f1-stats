import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Circuit } from '../circuit/circuit.model';

@Table
export class Race extends Model<Race> {
  @PrimaryKey
  @Column(DataType.SMALLINT)
  id: number;

  @Column(DataType.INTEGER)
  year: number;

  @Column(DataType.SMALLINT)
  round: number;

  @ForeignKey(() => Circuit)
  @Column(DataType.SMALLINT)
  circuitId: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.DATE)
  date: Date;

  @Column(DataType.TIME)
  time: string;

  @Column(DataType.STRING)
  url: string;
}
