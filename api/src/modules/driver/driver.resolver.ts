import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Query,
  Resolver
} from '@nestjs/graphql';

import { DriverService } from './driver.service';
import { DriverModel } from './driver-model';

@Resolver(DriverModel)
export class DriverResolver {
  constructor(private driverService: DriverService) {}

  @Query((returns) => DriverModel)
  public async driver(@Args('id') id: number): Promise<DriverModel> {
    const driver = await this.driverService.findById(id);
    if (!driver) throw new NotFoundException(id);

    return driver;
  }
}
