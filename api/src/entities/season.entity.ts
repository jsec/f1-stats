import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Season {
  @PrimaryColumn('smallint')
  id: number;

  @Column('int')
  year: number;

  @Column({ length: 100 })
  url: string;
}
