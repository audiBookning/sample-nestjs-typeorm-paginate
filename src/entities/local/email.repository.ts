import * as Faker from 'faker';
import { EntityRepository, Repository } from 'typeorm';
import { Email } from './email.entity';

@EntityRepository(Email)
export class EmailRepository extends Repository<Email> {
  createFaker(clientId: string): Promise<Email> {
    const email: Partial<Email> = {
      clientId,
      email: Faker.internet.email(),
      description: Faker.lorem.paragraph(),
    };
    const entity = Object.assign(new Email(), email);

    return this.save(entity);
  }
}
