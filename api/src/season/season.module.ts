import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { SeasonController } from './season.controller';
import { SeasonService } from './season.service';
import { seasonProviders } from './season.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SeasonController],
  providers: [SeasonService, ...seasonProviders],
})
export class SeasonModule {}
