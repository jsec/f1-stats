import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class RaceResult {
  @PrimaryColumn('int')
  id: number;

  @Column('smallint')
  raceId: number;

  @Column('smallint')
  driverId: number;

  @Column('smallint')
  constructorId: number;

  @Column('smallint')
  number: number;

  @Column('smallint')
  grid: number;

  @Column('smallint')
  position: number;

  @Column({ length: 2 })
  positionText: string;

  @Column('smallint')
  positionOrder: number;

  @Column('smallint')
  points: number;

  @Column('smallint')
  laps: number;

  @Column('interval')
  time: Date;

  @Column('bigint')
  milliseconds: number;

  @Column('smallint')
  fastestLap: number;

  @Column('smallint')
  fastestLapRank: number;

  @Column('interval')
  fastestLapTime: Date;

  @Column('real')
  fastestLapSpeed: number;

  @Column('smallint')
  statusId: number;
}
