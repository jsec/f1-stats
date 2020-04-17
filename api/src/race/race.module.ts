import { Module } from '@nestjs/common';
import { Race } from './race.model';
import { RaceController } from './race.controller';
import { RaceResult } from './race-result.model';
import { RaceResultController } from './race-result.controller';
import { RaceResultService } from './race-result.service';
import { RaceService } from './race.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Race, RaceResult])],
  controllers: [RaceController, RaceResultController],
  providers: [RaceService, RaceResultService],
})
export class RaceModule {}
