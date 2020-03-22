import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Driver } from './driver.entity';
import { Race } from './race.entity';

@Entity()
export class LapTime {
  @PrimaryColumn('int')
  id: number;

  @ManyToOne(type => Race, race => race.id)
  @JoinColumn()
  race: Race;

  @ManyToOne(type => Driver, driver => driver.id)
  @JoinColumn()
  driver: Driver;

  @Column('smallint')
  lap: number;

  @Column('smallint')
  position: number;

  @Column('interval')
  time: Date;

  @Column('int')
  milliseconds: number;
}
