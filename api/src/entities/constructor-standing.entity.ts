import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ConstructorStanding {
  @PrimaryColumn('smallint')
  id: number;

  @Column('smallint')
  raceId: number;

  @Column('smallint')
  constructorId: number;

  @Column('smallint')
  points: number;

  @Column('smallint')
  position: number;

  @Column({ length: 2 })
  positionText: string;

  @Column('smallint')
  wins: number;
}
