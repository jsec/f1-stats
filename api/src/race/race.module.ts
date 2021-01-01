import { Module } from '@nestjs/common';
import { RaceController } from './race.controller';
import { RaceResultController } from './race-result.controller';
import { RaceResultService } from './race-result.service';
import { RaceService } from './race.service';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [RaceController, RaceResultController],
  providers: [PrismaService, RaceService, RaceResultService]
})
export class RaceModule {}
