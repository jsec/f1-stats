import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { Driver } from './driver.entity';
import { Race } from './race.entity';

@Entity()
export class PitStop {
  @PrimaryColumn('int')
  id: number;

  @Column('smallint')
  @ManyToOne(type => Race, race => race.id)
  raceId: number;

  @Column('smallint')
  @ManyToOne(type => Driver, driver => driver.id)
  driverId: number;

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
