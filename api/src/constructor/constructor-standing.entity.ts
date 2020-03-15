import { Column, Entity } from 'typeorm';

@Entity()
export class ConstructorStanding {
  @Column()
  id: number;

  @Column()
  raceId: number;

  @Column()
  constructorId: number;

  @Column()
  points: number;

  @Column()
  position: number;

  @Column()
  positionText: string;

  @Column()
  wins: number;
}
