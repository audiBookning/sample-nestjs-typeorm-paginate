import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  imports: [ConfigService],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [],
})
export class ClientModule {}
