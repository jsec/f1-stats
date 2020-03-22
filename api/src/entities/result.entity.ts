import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Constructor } from './constructor.entity';
import { Driver } from './driver.entity';
import { Race } from './race.entity';
import { Status } from './status.entity';

@Entity()
export class RaceResult {
  @PrimaryColumn('int')
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

  @ManyToOne(type => Status, status => status.id)
  @JoinColumn()
  status: Status;
}
