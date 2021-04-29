import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { ConstructorResolver } from './constructor.resolver';
import { ConstructorService } from './constructor.service';
import { ConstructorResultResolver } from './constructor-result.resolver';
import { ConstructorResultService } from './constructor-result.service';
import { ConstructorStandingResolver } from './constructor-standing.resolver';
import { ConstructorStandingService } from './constructor-standing.service';

@Module({
  providers: [
    ConstructorResolver,
    ConstructorService,
    ConstructorResultResolver,
    ConstructorResultService,
    ConstructorStandingResolver,
    ConstructorStandingService,
    PrismaService
  ]
})
export class ConstructorModule {}
