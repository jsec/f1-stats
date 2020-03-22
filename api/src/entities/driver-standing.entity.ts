import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Driver } from './driver.entity';
import { Race } from './race.entity';

@Entity()
export class DriverStanding {
  @PrimaryColumn('int')
  id: number;

  @ManyToOne(type => Race, race => race.id)
  @JoinColumn()
  race: Race;

  @ManyToOne(type => Driver, driver => driver.id)
  @JoinColumn()
  driver: Driver;

  @Column('smallint')
  points: number;

  @Column('smallint')
  position: number;

  @Column({ length: 2 })
  positionText: string;

  @Column('boolean')
  win: boolean;
}
