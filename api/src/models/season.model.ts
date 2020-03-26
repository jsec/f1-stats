import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Season extends Model<Season> {
  @Column(DataType.SMALLINT)
  @PrimaryKey
  id: number;

  @Column(DataType.INTEGER)
  year: number;

  @Column(DataType.STRING)
  url: string;
}
