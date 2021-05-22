import * as Faker from 'faker';
import { EntityRepository, Repository } from 'typeorm';
import { Client } from './client.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  createFaker(): Promise<Client> {
    const client: Partial<Client> = {
      lastname: Faker.name.lastName(),
      name: Faker.name.firstName(),
      foto: Faker.image.imageUrl(),
      description: Faker.lorem.paragraph(),
    };
    const entity = Object.assign(new Client(), client);

    return this.save(entity);
  }
}
