import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Status extends Model<Status> {
  @Column(DataType.SMALLINT)
  @PrimaryKey
  id: number;

  @Column(DataType.STRING)
  status: string;
}
