import { Column, Entity } from 'typeorm';

@Entity()
export class RaceResult {
  @Column()
  id: number;

  @Column()
  raceId: number;

  @Column()
  driverId: number;

  @Column()
  number: number;

  @Column()
  grid: number;

  @Column()
  position: number;

  @Column()
  positionText: string;

  @Column()
  positionOrder: number;

  @Column()
  points: number;

  @Column()
  laps: number;

  @Column()
  time: Date;

  @Column()
  milliseconds: number;

  @Column()
  fastestLap: number;

  @Column()
  fastestLapRank: number;

  @Column()
  fastestLapTime: Date;

  @Column()
  fastestLapSpeed: number;

  @Column()
  statusId: number;
}
