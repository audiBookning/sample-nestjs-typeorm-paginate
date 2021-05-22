import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientSvc: ClientService) {}

  @Get('all')
  getAllClients() {
    return this.clientSvc.getAllClients();
  }

  @Get('paginated')
  getPaginatedClients(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;
    return this.clientSvc.getPaginatedClients({
      page,
      limit,
      route: '/client/paginated',
    });
  }
}
