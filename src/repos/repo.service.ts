import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from '../entities/client/client.repository';
import { EmailRepository } from '../entities/local/email.repository';
import { PhoneRepository } from '../entities/local/phone.repository';
import { PropertyRepository } from '../entities/local/property.repository';
import { WebsiteRepository } from '../entities/local/website.repository';

@Injectable()
class RepoService {
  public constructor(
    // Client
    @InjectRepository(ClientRepository)
    public client: ClientRepository,
    // Local
    @InjectRepository(EmailRepository)
    public emails: EmailRepository,
    @InjectRepository(PhoneRepository)
    public phone: PhoneRepository,
    @InjectRepository(WebsiteRepository)
    public websites: WebsiteRepository,
    @InjectRepository(PropertyRepository)
    public property: PropertyRepository,
  ) {}
}

export default RepoService;
