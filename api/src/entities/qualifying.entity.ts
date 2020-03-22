import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from './constructor.entity';
import { Driver } from './driver.entity';
import { Race } from './race.entity';

@Entity()
export class Qualification {
  @PrimaryColumn('smallint')
  id: number;

  @ManyToOne(type => Race, race => race.id)
  @JoinColumn()
  race: Race;

  @ManyToOne(type => Driver, driver => driver.id)
  @JoinColumn()
  driver: Driver;

  @ManyToOne(type => Constructor, constructor => constructor.id)
  @JoinColumn()
  constructorRef: Constructor;

  @Column('smallint')
  number: number;

  @Column('interval')
  q1: Date;

  @Column('interval')
  q2: Date;

  @Column('interval')
  q3: Date;
}
