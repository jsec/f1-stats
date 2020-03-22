import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Circuit {
  @PrimaryColumn('smallint')
  id: number;

  @Column({ length: 20 })
  ref: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 20 })
  country: string;

  @Column('numeric')
  latitude: number;

  @Column('numeric')
  longitude: number;

  @Column({ length: 5 })
  alt: string;

  @Column({ length: 100 })
  url: string;
}
