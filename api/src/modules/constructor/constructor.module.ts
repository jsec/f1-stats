import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { ConstructorController } from './constructor.controller';
import { ConstructorService } from './constructor.service';
import { ConstructorResultController } from './constructor-result.controller';
import { ConstructorResultService } from './constructor-result.service';
import { ConstructorStandingController } from './constructor-standing.controller';
import { ConstructorStandingService } from './constructor-standing.service';

@Module({
  controllers: [ ConstructorController, ConstructorResultController, ConstructorStandingController ],
  providers: [
    ConstructorService,
    ConstructorResultService,
    ConstructorStandingService,
    PrismaService
  ]
})
export class ConstructorModule {}
