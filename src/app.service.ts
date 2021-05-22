import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import RepoService from './repos/repo.service';

@Injectable()
export class AppService {
  constructor(private repoSvc: RepoService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async seedDB(): Promise<boolean> {
    const randomClientCount = Math.ceil(Math.random() * 20);
    for (let i = 0; i < randomClientCount; i++) {
      await this.createCliente();
    }
    return true;
  }

  async truncateDB(): Promise<boolean> {
    const entityManager = getManager();
    await entityManager.query(
      `
      select 'drop table if exists "' || tablename || '" cascade;' 
      from pg_tables
      where schemaname = 'public'; -- or any other schema
      `,
    );
    return true;
  }

  async createCliente() {
    try {
      const client = await this.repoSvc.client.createFaker();
      const randomLocalsCount = Math.ceil(Math.random() * 3);
      for (let i = 0; i < randomLocalsCount; i++) {
        await this.repoSvc.emails.createFaker(client.id);
        await this.repoSvc.websites.createFaker(client.id);
        await this.repoSvc.phone.createFaker(client.id);
        await this.repoSvc.property.createFaker(client.id);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
