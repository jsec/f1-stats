import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { DriverResolver } from './driver.resolver';
import { DriverService } from './driver.service';
import { DriverStandingResolver } from './driver-standing.resolver';
import { DriverStandingService } from './driver-standing.service';

/* TODO: Figure out how to make eslint respect this */
/* eslint-disable */
// prettier-ignore
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
