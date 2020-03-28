import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Circuit extends Model<Circuit> {
  @PrimaryKey
  @Column(DataType.SMALLINT)
  id: number;

  @Column(DataType.STRING)
  ref: string;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  city: string;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.REAL)
  latitude: number;

  @Column(DataType.REAL)
  longitude: number;

  @Column(DataType.STRING)
  alt: string;

  @Column(DataType.STRING)
  url: string;
}
