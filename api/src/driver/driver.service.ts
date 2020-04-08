import { Inject, Injectable } from '@nestjs/common';

import { Driver } from './driver.model';

@Injectable()
export class DriverService {
  constructor(
    @Inject('DRIVERS_REPOSITORY') private driverRepository: typeof Driver,
  ) {}

  public async findAll(): Promise<Driver[]> {
    return this.driverRepository.findAll<Driver>();
  }
}
