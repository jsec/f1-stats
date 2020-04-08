import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { RaceController } from './race.controller';
import { RaceResultController } from './race-result.controller';
import { RaceResultService } from './race-result.service';
import { RaceService } from './race.service';
import { raceProviders } from './race.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RaceController, RaceResultController],
  providers: [RaceService, RaceResultService, ...raceProviders],
})
export class RaceModule {}
