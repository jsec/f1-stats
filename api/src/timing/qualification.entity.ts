import { Column, Entity } from 'typeorm';

@Entity()
export class Qualification {
  @Column()
  id: number;

  @Column()
  raceId: number;

  @Column()
  driverId: number;

  @Column()
  constructorId: number;

  @Column()
  number: number;

  @Column()
  q1: Date;

  @Column()
  q2: Date;

  @Column()
  q3: Date;
}
