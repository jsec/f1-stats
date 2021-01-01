import { Controller, Get } from '@nestjs/common';
import { Drivers } from '@prisma/client';

import { DriverService } from './driver.service';

@Controller('drivers')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  public async getAll(): Promise<Drivers[]> {
    return this.driverService.findAll();
  }
}
