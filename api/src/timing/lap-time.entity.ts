import { Column, Entity } from 'typeorm';

@Entity()
export class LapTime {
  @Column()
  id: number;

  @Column()
  raceId: number;

  @Column()
  driverId: number;

  @Column()
  lap: number;

  @Column()
  position: number;

  @Column()
  time: Date;

  @Column()
  milliseconds: number;
}
