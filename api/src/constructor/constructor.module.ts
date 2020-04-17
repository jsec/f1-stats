import { Constructor } from './constructor.model';
import { ConstructorController } from './constructor.controller';
import { ConstructorResult } from './constructor-result.model';
import { ConstructorResultController } from './constructor-result.controller';
import { ConstructorResultService } from './constructor-result.service';
import { ConstructorService } from './constructor.service';
import { ConstructorStanding } from './constructor-standing.model';
import { ConstructorStandingController } from './constructor-standing.controller';
import { ConstructorStandingService } from './constructor-standing.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Constructor,
      ConstructorResult,
      ConstructorStanding,
    ]),
  ],
  controllers: [
    ConstructorController,
    ConstructorResultController,
    ConstructorStandingController,
  ],
  providers: [
    ConstructorService,
    ConstructorResultService,
    ConstructorStandingService,
  ],
})
export class ConstructorModule {}
