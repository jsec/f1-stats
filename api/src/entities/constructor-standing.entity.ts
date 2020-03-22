import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from './constructor.entity';
import { Race } from './race.entity';

@Entity()
export class ConstructorStanding {
  @PrimaryColumn('smallint')
  id: number;

  @ManyToOne(type => Race, race => race.id)
  @JoinColumn()
  race: Race;

  @ManyToOne(type => Constructor, constructor => constructor.id)
  @JoinColumn()
  constructorRef: Constructor;

  @Column('smallint')
  points: number;

  @Column('smallint')
  position: number;

  @Column({ length: 2 })
  positionText: string;

  @Column('smallint')
  wins: number;
}
