import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { SeasonResolver } from './season.resolver';
import { SeasonService } from './season.service';

@Module({
  providers: [ SeasonService, PrismaService, SeasonResolver ]
})
export class SeasonModule {}
