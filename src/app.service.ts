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

  // INFO: Since the schema is very simple and all the other entities are linked to a client,
  // Truncating the client table with cascade is also truncating all the others
  async truncateDB(): Promise<boolean> {
    try {
      const entityManager = getManager();
      const truncate = await entityManager.query(
        `
        TRUNCATE TABLE client 
        CASCADE;
        `,
      );
      console.log('truncate: ', truncate);
      return true;
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
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
