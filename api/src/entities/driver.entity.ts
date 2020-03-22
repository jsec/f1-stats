import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Driver {
  @PrimaryColumn('smallint')
  id: number;

  @Column({ length: 50 })
  ref: string;

  @Column('int')
  number: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column('date')
  dob: Date;

  @Column({ length: 20 })
  nationality: string;

  @Column({ length: 100 })
  url: string;
}
