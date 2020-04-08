import { Inject, Injectable } from '@nestjs/common';

import { DriverStanding } from './driver-standing.model';

@Injectable()
export class DriverStandingService {
  constructor(
    @Inject('DRIVER_STANDINGS_REPOSITORY')
    private driverStandingRepository: typeof DriverStanding,
  ) {}

  public async findAll(): Promise<DriverStanding[]> {
    return this.driverStandingRepository.findAll<DriverStanding>();
  }
}
