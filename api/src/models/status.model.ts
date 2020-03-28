import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Status extends Model<Status> {
  @PrimaryKey
  @Column(DataType.SMALLINT)
  id: number;

  @Column(DataType.STRING)
  status: string;
}
