import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Driver extends Model<Driver> {
  @Column(DataType.SMALLINT)
  @PrimaryKey
  id: number;

  @Column(DataType.STRING)
  ref: string;

  @Column(DataType.INTEGER)
  number: number;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.DATE)
  dob: Date;

  @Column(DataType.STRING)
  nationality: string;

  @Column(DataType.STRING)
  url: string;
}
