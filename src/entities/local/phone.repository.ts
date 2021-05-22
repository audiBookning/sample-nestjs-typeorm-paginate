import * as Faker from 'faker';
import { EntityRepository, Repository } from 'typeorm';
import { Phone } from './phone.entity';

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {
  createFaker(clientId: string): Promise<Phone> {
    const email: Partial<Phone> = {
      clientId,
      phoneNumber: Faker.phone.phoneNumber(),
      description: Faker.lorem.paragraph(),
    };
    const entity = Object.assign(new Phone(), email);

    return this.save(entity);
  }
}
