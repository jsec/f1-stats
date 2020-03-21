import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from './constructor.entity';
import { Driver } from './driver.entity';
import { Race } from './race.entity';

@Entity()
export class Qualification {
  @PrimaryColumn('smallint')
  id: number;

  @Column('smallint')
  @ManyToOne(type => Race, race => race.id)
  raceId: number;

  @Column('smallint')
  @ManyToOne(type => Driver, driver => driver.id)
  driverId: number;

  @Column('smallint')
  @ManyToOne(type => Constructor, constructor => constructor.id)
  constructorId: number;

  @Column('smallint')
  number: number;

  @Column('interval')
  q1: Date;

  @Column('interval')
  q2: Date;

  @Column('interval')
  q3: Date;
}
