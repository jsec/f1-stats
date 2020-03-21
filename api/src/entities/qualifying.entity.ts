import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Qualification {
  @PrimaryColumn('smallint')
  id: number;

  @Column('smallint')
  raceId: number;

  @Column('smallint')
  driverId: number;

  @Column('smallint')
  constructorId: number;

  @Column('smallint')
  number: number;

  @Column('interval')
  q1: Date;

  @Column('interval')
  q2: Date;

  @Column('interval')
  q3: Date;
}
