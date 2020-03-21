import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class LapTime {
  @PrimaryColumn('int')
  id: number;

  @Column('smallint')
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
