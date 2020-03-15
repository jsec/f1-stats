import { Column, Entity } from 'typeorm';

@Entity()
export class Season {
  @Column()
  id: number;

  @Column()
  year: number;

  @Column()
  url: string;
}
