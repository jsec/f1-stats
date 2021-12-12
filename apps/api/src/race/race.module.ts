import { DataModule } from '@f1-stats/data';
import { Module } from '@nestjs/common';
import { RaceController } from './race.controller';
import { RaceService } from './race.service';
import { RaceResultController } from './result/race-result.controller';
import { RaceResultService } from './result/race-result.service';

@Module({
  imports: [DataModule],
  controllers: [RaceController, RaceResultController],
  providers: [RaceService, RaceResultService]
})
export class RaceModule {}
