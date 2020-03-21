import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ConstructorResult {
  @PrimaryColumn('smallint')
  id: number;

  @Column('smallint')
  raceId: number;

  @Column('smallint')
  constructorId: number;

  @Column('smallint')
  points: number;

  @Column('smallint')
  statusId: number;
}
