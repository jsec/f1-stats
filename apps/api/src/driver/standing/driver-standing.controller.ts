import { DriverStanding } from '@f1-stats/data';
import { Controller, Get, Param } from '@nestjs/common';
import { DriverStandingService } from './driver-standing.service';

@Controller('driver/standing/')
export class DriverStandingController {
  constructor(private readonly driverStandingService: DriverStandingService) {}

  @Get()
  public async getAll(): Promise<DriverStanding[]> {
    return this.driverStandingService.getAll();
  }

  @Get(':id')
  public async getById(
    @Param('id') id: string
  ): Promise<DriverStanding | undefined> {
    return this.driverStandingService.getById(parseInt(id, 10));
  }
}
