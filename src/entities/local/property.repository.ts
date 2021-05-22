import { EntityRepository, Repository } from 'typeorm';
import { Property } from './property.entity';

@EntityRepository(Property)
export class PropertyRepository extends Repository<Property> {}
