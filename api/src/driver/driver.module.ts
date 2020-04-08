import { DatabaseModule } from '../database/database.module';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverStandingController } from './driver-standing.controller';
import { DriverStandingService } from './driver-standing.service';
import { Module } from '@nestjs/common';
import { driverProviders } from './driver.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DriverController, DriverStandingController],
  providers: [DriverService, DriverStandingService, ...driverProviders],
})
export class DriverModule {}
