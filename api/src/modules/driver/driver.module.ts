import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverStandingController } from './driver-standing.controller';
import { DriverStandingService } from './driver-standing.service';

@Module({
  controllers: [ DriverController, DriverStandingController ],
  providers: [ DriverService, DriverStandingService, PrismaService ]
})
export class DriverModule {}
