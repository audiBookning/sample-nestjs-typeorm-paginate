import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClientModule } from './entities/client/client.module';
import RepoModule from './repos/repo.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, RepoModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
