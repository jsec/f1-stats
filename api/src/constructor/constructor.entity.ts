import { Column, Entity } from 'typeorm';

@Entity()
export class Constructor {
  @Column()
  id: number;

  @Column()
  ref: string;

  @Column()
  name: string;

  @Column()
  nationality: string;

  @Column()
  url: string;
}
