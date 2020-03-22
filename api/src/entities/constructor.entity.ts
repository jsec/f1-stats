import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Constructor {
  @PrimaryColumn('smallint')
  id: number;

  @Column({ length: 20 })
  ref: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 20 })
  nationality: string;

  @Column({ length: 100 })
  url: string;
}
