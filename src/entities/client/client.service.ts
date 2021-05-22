import { Injectable } from '@nestjs/common';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import RepoService from '../../repos/repo.service';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(private repoSVC: RepoService) {}

  getAllClients(): Promise<Client[]> {
    return this.repoSVC.client.find();
  }

  async getPaginatedClients(
    options: IPaginationOptions,
  ): Promise<Pagination<Client>> {
    return paginate<Client>(this.repoSVC.client, options);
  }
}
