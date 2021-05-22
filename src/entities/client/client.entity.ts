import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Email } from '../local/email.entity';
import { Phone } from '../local/phone.entity';
import { Property } from '../local/property.entity';
import { Website } from '../local/website.entity';

//@OsoClass()

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  lastname?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  foto?: string;

  // ****************************
  // OneToMany
  // ****************************
  // LOCALIZATION

  @OneToMany(() => Email, (email) => email.client)
  emails?: Email[];

  @OneToMany(() => Property, (property) => property.client)
  property?: Property[];

  @OneToMany(() => Website, (website) => website.client)
  websites?: Website[];

  @OneToMany(() => Phone, (phone) => phone.client)
  phone?: Phone[];

  // ****************************

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;
}
