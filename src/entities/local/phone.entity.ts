import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from '../client/client.entity';

export enum PhoneKind {
  TELEPHONE = 'TELEPHONE',
  MOBILE = 'MOBILE',
  FAX = 'FAX',
}

@Entity()
export class Phone extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ************
  // ManyToOne

  @Column()
  clientId: string;

  @ManyToOne(() => Client, (client) => client.phone)
  client: Client;

  // ************

  @Column('text')
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: PhoneKind,
    default: PhoneKind.TELEPHONE,
  })
  phoneKind: PhoneKind;

  // ************

  @Column({ default: false })
  main: boolean;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
