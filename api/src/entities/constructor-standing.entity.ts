import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from 'src/entities/constructor.entity';
import { Race } from 'src/entities/race.entity';

@Entity()
export class ConstructorStanding {
  @PrimaryColumn('smallint')
  id: number;

  @Column('smallint')
  @ManyToOne(type => Race, race => race.id)
  raceId: number;

  @Column('smallint')
  @ManyToOne(type => Constructor, constructor => constructor.id)
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
