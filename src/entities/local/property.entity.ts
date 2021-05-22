import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from '../client/client.entity';

//@OsoClass()

@Entity()
export class Property extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ************
  // ManyToOne

  @Column()
  clientId: string;

  @ManyToOne(() => Client, (client) => client.property)
  client: Client;

  // ************

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  zipCode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  // ************

  @Column({ default: false })
  main: boolean;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
