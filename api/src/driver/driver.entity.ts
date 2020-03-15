import { Column, Entity } from 'typeorm';

@Entity()
export class Driver {
  @Column()
  id: number;

  @Column()
  ref: string;

  @Column()
  number: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dob: Date;

  @Column()
  nationality: string;

  @Column()
  url: string;
}
