import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { RaceResolver } from './race.resolver';
import { RaceService } from './race.service';
import { RaceResultResolver } from './race-result.resolver';
import { RaceResultService } from './race-result.service';

@Module({
  providers: [
PrismaService,
RaceResolver,
RaceService,
RaceResultResolver,
RaceResultService
]
})
export class RaceModule {}
