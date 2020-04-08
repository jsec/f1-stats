import { ConstructorController } from './constructor.controller';
import { ConstructorResultController } from './constructor-result.controller';
import { ConstructorResultService } from './constructor-result.service';
import { ConstructorService } from './constructor.service';
import { ConstructorStandingController } from './constructor-standing.controller';
import { ConstructorStandingService } from './constructor-standing.service';
import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { constructorProviders } from './constructor.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [
    ConstructorController,
    ConstructorResultController,
    ConstructorStandingController,
  ],
  providers: [
    ConstructorService,
    ConstructorResultService,
    ConstructorStandingService,
    ...constructorProviders,
  ],
})
export class ConstructorModule {}
