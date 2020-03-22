import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Driver } from './driver.entity';
import { Race } from './race.entity';

@Entity()
export class PitStop {
  @PrimaryColumn('int')
  id: number;

  @ManyToOne(type => Race, race => race.id)
  @JoinColumn()
  race: Race;

  @ManyToOne(type => Driver, driver => driver.id)
  @JoinColumn()
  driver: Driver;

  @Column('smallint')
  stop: number;

  @Column('smallint')
  lap: number;

  @Column('time without time zone')
  time: Date;

  @Column('interval')
  duration: number;

  @Column('int')
  milliseconds: number;
}
