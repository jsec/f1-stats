import { Controller, Get } from '@nestjs/common';

import { DriverStanding } from './driver-standing.model';
import { DriverStandingService } from './driver-standing.service';

@Controller('drivers/standings')
export class DriverStandingController {
  constructor(private driverStandingService: DriverStandingService) {}

  @Get()
  public async getAll(): Promise<DriverStanding[]> {
    return this.driverStandingService.findAll();
  }
}
