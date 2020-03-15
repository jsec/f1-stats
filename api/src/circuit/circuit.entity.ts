import { Column, Entity } from 'typeorm';

@Entity()
export class Circuit {
  @Column()
  id: number;

  @Column()
  ref: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  alt: string;

  @Column()
  url: string;
}
