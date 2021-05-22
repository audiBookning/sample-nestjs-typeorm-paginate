import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // INFO: Should be a Post. Use Get for ease of use
  @Get('seed')
  seedDB(): Promise<boolean> {
    return this.appService.seedDB();
  }

  // INFO: Should be a Post. Use Get for ease of use
  @Get('truncate')
  truncateDB(): Promise<boolean> {
    return this.appService.truncateDB();
  }
}
