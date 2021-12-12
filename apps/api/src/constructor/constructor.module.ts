import { DataModule } from '@f1-stats/data';
import { Module } from '@nestjs/common';
import { ConstructorController } from './constructor.controller';
import { ConstructorService } from './constructor.service';
import { ConstructorResultController } from './result/constructor-result.controller';
import { ConstructorResultService } from './result/constructor-result.service';
import { ConstructorStandingController } from './standing/constructor-standing.controller';
import { ConstructorStandingService } from './standing/constructor-standing.service';

@Module({
  imports: [DataModule],
  controllers: [
    ConstructorController,
    ConstructorResultController,
    ConstructorStandingController
  ],
  providers: [
    ConstructorService,
    ConstructorResultService,
    ConstructorStandingService
  ]
})
export class ConstructorModule {}
