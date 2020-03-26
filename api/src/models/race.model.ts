import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Circuit } from './circuit.model';

@Table
export class Race extends Model<Race> {
  @Column(DataType.SMALLINT)
  @PrimaryKey
  id: number;

  @Column(DataType.INTEGER)
  year: number;

  @Column(DataType.SMALLINT)
  round: number;

  @Column(DataType.SMALLINT)
  @ForeignKey(() => Circuit)
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
