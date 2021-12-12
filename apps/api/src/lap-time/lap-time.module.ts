import { DataModule } from '@f1-stats/data';
import { Module } from '@nestjs/common';
import { LapTimeController } from './lap-time.controller';
import { LapTimeService } from './lap-time.service';

@Module({
  imports: [DataModule],
  controllers: [LapTimeController],
  providers: [LapTimeService]
})
export class LapTimeModule {}
