import { ConstructorController } from './constructor.controller';
import { ConstructorResultController } from './constructor-result.controller';
import { ConstructorResultService } from './constructor-result.service';
import { ConstructorService } from './constructor.service';
import { ConstructorStandingController } from './constructor-standing.controller';
import { ConstructorStandingService } from './constructor-standing.service';
import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [
    ConstructorController,
    ConstructorResultController,
    ConstructorStandingController,
  ],
  providers: [
    ConstructorService,
    ConstructorResultService,
    ConstructorStandingService,
    PrismaService,
  ],
})
export class ConstructorModule {}
