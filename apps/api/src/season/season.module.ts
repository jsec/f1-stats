import { Module } from '@nestjs/common';
import { DataModule } from '@f1-stats/data';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';

@Module({
  imports: [DataModule],
  controllers: [SeasonController],
  providers: [SeasonService]
})
export class SeasonModule {}
