import { Column, Entity } from 'typeorm';

@Entity()
export class DriverStanding {
  @Column()
  id: number;

  @Column()
  raceId: number;

  @Column()
  driverId: number;

  @Column()
  points: number;

  @Column()
  position: number;

  @Column()
  positionText: string;

  @Column()
  win: boolean;
}
