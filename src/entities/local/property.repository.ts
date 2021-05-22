import * as Faker from 'faker';
import { EntityRepository, Repository } from 'typeorm';
import { Property } from './property.entity';

@EntityRepository(Property)
export class PropertyRepository extends Repository<Property> {
  createFaker(clientId: string): Promise<Property> {
    const email: Partial<Property> = {
      clientId,
      address: Faker.address.streetAddress(),
      country: Faker.address.country(),
      city: Faker.address.city(),
      zipCode: Faker.address.zipCode(),
      description: Faker.lorem.paragraph(),
    };
    const entity = Object.assign(new Property(), email);

    return this.save(entity);
  }
}
