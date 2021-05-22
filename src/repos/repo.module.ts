import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from '../entities/client/client.repository';
import { EmailRepository } from '../entities/local/email.repository';
import { PhoneRepository } from '../entities/local/phone.repository';
import { PropertyRepository } from '../entities/local/property.repository';
import { WebsiteRepository } from '../entities/local/website.repository';
import RepoService from './repo.service';

@Global()
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      ClientRepository,
      // Local
      EmailRepository,
      PhoneRepository,
      WebsiteRepository,
      PropertyRepository,
    ]),
  ],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}
export default RepoModule;
