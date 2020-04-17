import { Driver } from './driver.model';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverStanding } from './driver-standing.model';
import { DriverStandingController } from './driver-standing.controller';
import { DriverStandingService } from './driver-standing.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Driver, DriverStanding])],
  controllers: [DriverController, DriverStandingController],
  providers: [DriverService, DriverStandingService],
})
export class DriverModule {}
