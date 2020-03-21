import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Race {
  @PrimaryColumn('smallint')
  id: number;

  @Column('int')
  year: number;

  @Column('smallint')
  round: number;

  @Column('smallint')
  circuitId: number;

  @Column({ length: 50 })
  name: string;

  @Column('date')
  date: Date;

  @Column('time without time zone')
  time: string;

  @Column({ length: 100 })
  url: string;
}
