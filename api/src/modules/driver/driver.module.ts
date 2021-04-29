import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { DriverResolver } from './driver.resolver';
import { DriverService } from './driver.service';
import { DriverStandingResolver } from './driver-standing.resolver';
import { DriverStandingService } from './driver-standing.service';

@Module({
  providers: [
    DriverResolver,
    DriverService,
    DriverStandingResolver,
    DriverStandingService,
    PrismaService
  ]
})
export class DriverModule {}
