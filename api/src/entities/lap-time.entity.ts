import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { Race } from './race.entity';

@Entity()
export class LapTime {
  @PrimaryColumn('int')
  id: number;

  @Column('smallint')
  @ManyToOne(type => Race, race => race.id)
  raceId: number;

  @Column('smallint')
  driverId: number;

  @Column('smallint')
  lap: number;

  @Column('smallint')
  position: number;

  @Column('interval')
  time: Date;

  @Column('int')
  milliseconds: number;
}
