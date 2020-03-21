import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Status {
  @PrimaryColumn('smallint')
  id: number;

  @Column({ length: 50 })
  status: string;
}
