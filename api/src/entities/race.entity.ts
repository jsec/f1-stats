import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Circuit } from './circuit.entity';

@Entity()
export class Race {
  @PrimaryColumn('smallint')
  id: number;

  @Column('int')
  year: number;

  @Column('smallint')
  round: number;

  @ManyToOne(type => Circuit, circuit => circuit.id)
  @JoinColumn()
  circuit: Circuit;

  @Column({ length: 50 })
  name: string;

  @Column('date')
  date: Date;

  @Column('time without time zone')
  time: string;

  @Column({ length: 100 })
  url: string;
}
