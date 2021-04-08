import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { DriverStandingModel } from './driver-standing.model';
import { DriverStandingService } from './driver-standing.service';

@Resolver(DriverStandingModel)
export class DriverStandingResolver {
  constructor(private driverStandingService: DriverStandingService) {}

  @Query(returns => DriverStandingModel)
  public async getDriverStanding(@Args('id') id: number): Promise<DriverStandingModel> {
    const driverStanding = await this.driverStandingService.findById(id);
    if (!driverStanding) throw new NotFoundException(id);

    return driverStanding;
  }
}
