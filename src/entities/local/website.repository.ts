import { EntityRepository, Repository } from 'typeorm';
import { Website } from './website.entity';

@EntityRepository(Website)
export class WebsiteRepository extends Repository<Website> {}
