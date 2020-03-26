import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Constructor extends Model<Constructor> {
  @Column(DataType.SMALLINT)
  @PrimaryKey
  id: number;

  @Column(DataType.STRING)
  ref: string;

  @Column(DataType.STRING)
  nationality: string;

  @Column(DataType.STRING)
  url: string;
}
