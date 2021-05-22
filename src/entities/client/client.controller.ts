import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientSvc: ClientService) {}

  @Get('all')
  getAllClients() {
    return this.clientSvc.getAllClients();
  }

  // REF: https://github.com/nestjsx/nestjs-typeorm-paginate/issues/517
  @Get('paginated')
  getPaginatedClients(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;
    return this.clientSvc.getPaginatedClients({
      page,
      limit,
      route: '/client/paginated',
    });
  }
}
