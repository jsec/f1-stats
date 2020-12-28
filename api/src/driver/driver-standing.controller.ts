import { Controller, Get } from '@nestjs/common';
import { DriverStandingService } from './driver-standing.service';
import { DriverStandings } from '@prisma/client';

@Controller('drivers/standings')
export class DriverStandingController {
  constructor(private driverStandingService: DriverStandingService) {}

  @Get()
  public async getAll(): Promise<DriverStandings[]> {
    return this.driverStandingService.findAll();
  }
}
