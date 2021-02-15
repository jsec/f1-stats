import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { RaceController } from './race.controller';
import { RaceService } from './race.service';
import { RaceResultController } from './race-result.controller';
import { RaceResultService } from './race-result.service';

@Module({
  controllers: [ RaceController, RaceResultController ],
  providers: [ PrismaService, RaceService, RaceResultService ]
})
export class RaceModule {}
