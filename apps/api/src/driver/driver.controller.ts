import { Driver } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { DriverService } from './driver.service';

@Controller('season')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get()
  public async getAll(): Promise<Driver[]> {
    return this.driverService.getAll();
  }
}
