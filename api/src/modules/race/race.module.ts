import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { RaceResolver } from './race.resolver';
import { RaceService } from './race.service';
import { RaceResultResolver } from './race-result.resolver';
import { RaceResultService } from './race-result.service';

/* TODO: Figure out how to make eslint respect this */
/* eslint-disable */
// prettier-ignore
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
