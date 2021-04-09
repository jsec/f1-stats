import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { LapTimeResolver } from './lap-time.resolver';
import { LapTimeService } from './lap-time.service';
import { PitStopResolver } from './pit-stop.resolver';
import { PitStopService } from './pit-stop.service';
import { QualificationResolver } from './qualification.resolver';
import { QualificationService } from './qualification.service';

@Module({
  providers: [
    LapTimeResolver,
    LapTimeService,
    PitStopResolver,
    PitStopService,
    PrismaService,
    QualificationResolver,
    QualificationService
  ]
})
export class TimingModule {}
