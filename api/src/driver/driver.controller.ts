import { Controller, Get } from '@nestjs/common';
import { DriverService } from './driver.service';
import { Drivers } from '@prisma/client';

@Controller('drivers')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  public async getAll(): Promise<Drivers[]> {
    return this.driverService.findAll();
  }
}
