import * as Faker from 'faker';
import { EntityRepository, Repository } from 'typeorm';
import { Website } from './website.entity';

@EntityRepository(Website)
export class WebsiteRepository extends Repository<Website> {
  createFaker(clientId: string): Promise<Website> {
    const email: Partial<Website> = {
      clientId,
      website: Faker.internet.domainName(),
      description: Faker.lorem.paragraph(),
    };
    const entity = Object.assign(new Website(), email);

    return this.save(entity);
  }
}
