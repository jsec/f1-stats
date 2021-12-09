import { DataModule } from '@f1-stats/data';
import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverStandingController } from './standing/driver-standing.controller';
import { DriverStandingService } from './standing/driver-standing.service';

@Module({
  imports: [DataModule],
  controllers: [DriverController, DriverStandingController],
  providers: [DriverService, DriverStandingService]
})
export class DriverModule {}
