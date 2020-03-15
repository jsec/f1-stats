import { Column, Entity } from 'typeorm';

@Entity()
export class Status {
  @Column()
  id: number;

  @Column()
  status: string;
}
