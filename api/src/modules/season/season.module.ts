import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { SeasonController } from './season.controller';
import { SeasonResolver } from './season.resolver';
import { SeasonService } from './season.service';

@Module({
  controllers: [SeasonController],
  providers: [ SeasonService, PrismaService, SeasonResolver ]
})
export class SeasonModule {}
