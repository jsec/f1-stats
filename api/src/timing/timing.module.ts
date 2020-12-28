import { LapTime } from './lap-time.model';
import { LapTimeController } from './lap-time.controller';
import { LapTimeService } from './lap-time.service';
import { Module } from '@nestjs/common';
import { PitStop } from './pit-stop.model';
import { PitStopController } from './pit-stop.controller';
import { PitStopService } from './pit-stop.service';
import { Qualification } from './qualification.model';
import { QualificationController } from './qualification.controller';
import { QualificationService } from './qualification.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [SequelizeModule.forFeature([LapTime, PitStop, Qualification])],
  controllers: [LapTimeController, PitStopController, QualificationController],
  providers: [
    LapTimeService,
    PitStopService,
    PrismaService,
    QualificationService,
  ],
})
export class TimingModule {}
