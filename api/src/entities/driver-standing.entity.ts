import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { Driver } from './driver.entity';
import { Race } from './race.entity';

@Entity()
export class DriverStanding {
  @PrimaryColumn('int')
  id: number;

  @Column('smallint')
  @ManyToOne(type => Race, race => race.id)
  raceId: number;

  @Column('smallint')
  @ManyToOne(type => Driver, driver => driver.id)
  driverId: number;

  @Column('smallint')
  points: number;

  @Column('smallint')
  position: number;

  @Column({ length: 2 })
  positionText: string;

  @Column('boolean')
  win: boolean;
}
