import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class DriverStanding {
  @PrimaryColumn('int')
  id: number;

  @Column('smallint')
  raceId: number;

  @Column('smallint')
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
