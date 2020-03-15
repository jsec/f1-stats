import { Column, Entity } from 'typeorm';

@Entity()
export class Race {
  @Column()
  id: number;

  @Column()
  year: number;

  @Column()
  round: number;

  @Column()
  circuitId: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  url: string;
}
