import { Column, Entity } from 'typeorm';

@Entity()
export class ConstructorResult {
  @Column()
  id: number;

  @Column()
  raceId: number;

  @Column()
  constructorId: number;

  @Column()
  points: number;

  @Column()
  status: number;
}
