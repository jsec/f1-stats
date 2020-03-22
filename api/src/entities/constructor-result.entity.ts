import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from './constructor.entity';
import { Race } from './race.entity';
import { Status } from './status.entity';

@Entity()
export class ConstructorResult {
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

  @ManyToOne(type => Status, status => status.id)
  @JoinColumn()
  status: Status;
}
