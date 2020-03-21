import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PitStop {
  @PrimaryColumn('int')
  id: number;

  @Column('smallint')
  raceId: number;

  @Column('smallint')
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
