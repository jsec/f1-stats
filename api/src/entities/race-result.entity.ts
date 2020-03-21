import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from './constructor.entity';
import { Driver } from './driver.entity';
import { Race } from './race.entity';
import { Status } from './status.entity';

@Entity()
export class RaceResult {
  @PrimaryColumn('int')
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

  @Column('smallint')
  grid: number;

  @Column('smallint')
  position: number;

  @Column({ length: 2 })
  positionText: string;

  @Column('smallint')
  positionOrder: number;

  @Column('smallint')
  points: number;

  @Column('smallint')
  laps: number;

  @Column('interval')
  time: Date;

  @Column('bigint')
  milliseconds: number;

  @Column('smallint')
  fastestLap: number;

  @Column('smallint')
  fastestLapRank: number;

  @Column('interval')
  fastestLapTime: Date;

  @Column('real')
  fastestLapSpeed: number;

  @Column('smallint')
  @OneToOne(type => Status, status => status.id)
  statusId: number;
}
