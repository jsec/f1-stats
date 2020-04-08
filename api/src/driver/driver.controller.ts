import { Controller, Get } from '@nestjs/common';

import { Driver } from './driver.model';
import { DriverService } from './driver.service';

@Controller('drivers')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  public async getAll(): Promise<Driver[]> {
    return this.driverService.findAll();
  }
}
