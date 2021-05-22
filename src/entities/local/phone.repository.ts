import { EntityRepository, Repository } from 'typeorm';
import { Phone } from './phone.entity';

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {}
