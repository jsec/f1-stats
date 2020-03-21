import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from './constructor.entity';
import { Race } from './race.entity';

@Entity()
export class ConstructorResult {
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
  statusId: number;
}
