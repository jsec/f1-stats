import { DatabaseModule } from '../database/database.module';
import { LapTimeController } from './lap-time.controller';
import { LapTimeService } from './lap-time.service';
import { Module } from '@nestjs/common';
import { PitStopController } from './pit-stop.controller';
import { PitStopService } from './pit-stop.service';
import { QualificationController } from './qualification.controller';
import { QualificationService } from './qualification.service';
import { timingProviders } from './timing.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [LapTimeController, PitStopController, QualificationController],
  providers: [
    LapTimeService,
    PitStopService,
    QualificationService,
    ...timingProviders,
  ],
})
export class TimingModule {}
