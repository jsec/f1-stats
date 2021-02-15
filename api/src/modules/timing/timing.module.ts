import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { LapTimeController } from './lap-time.controller';
import { LapTimeService } from './lap-time.service';
import { PitStopController } from './pit-stop.controller';
import { PitStopService } from './pit-stop.service';
import { QualificationController } from './qualification.controller';
import { QualificationService } from './qualification.service';

@Module({
  controllers: [ LapTimeController, PitStopController, QualificationController ],
  providers: [
    LapTimeService,
    PitStopService,
    PrismaService,
    QualificationService
  ]
})
export class TimingModule {}
