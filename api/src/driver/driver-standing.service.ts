import { DriverStanding } from './driver-standing.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DriverStandingService {
  constructor(
    @InjectModel(DriverStanding)
    private driverStandingModel: typeof DriverStanding,
  ) {}

  public async findAll(): Promise<DriverStanding[]> {
    return this.driverStandingModel.findAll();
  }
}
