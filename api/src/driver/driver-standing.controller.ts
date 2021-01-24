import { Controller, Get } from '@nestjs/common';
import { DriverStanding } from '@prisma/client';

import { DriverStandingService } from './driver-standing.service';

@Controller('drivers/standings')
export class DriverStandingController {
  constructor(private driverStandingService: DriverStandingService) {}

  @Get()
  public async getAll(): Promise<DriverStanding[]> {
    return this.driverStandingService.findAll();
  }
}
