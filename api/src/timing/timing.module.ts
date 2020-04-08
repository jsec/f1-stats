import { DatabaseModule } from '../database/database.module';
import { LapTimeController } from './lap-time.controller';
import { LapTimeService } from './lap-time.service';
import { Module } from '@nestjs/common';
import { timingProviders } from './timing.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LapTimeController],
  providers: [LapTimeService, ...timingProviders],
})
export class TimingModule {}
