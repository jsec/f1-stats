import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { statusProviders } from './status.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [StatusController],
  providers: [StatusService, ...statusProviders],
})
export class StatusModule {}
