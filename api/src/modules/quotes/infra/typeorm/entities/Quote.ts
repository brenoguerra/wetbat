import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity('quotes')
export default class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from: string;

  @Column()
  destination: string;

  @Column()
  depart_date: string;

  @Column()
  return_date: string;

  @Column()
  people: number;

  @Column()
  transportation: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
