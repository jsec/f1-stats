import { Driver } from './driver.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverModel: typeof Driver) {}

  public async findAll(): Promise<Driver[]> {
    return this.driverModel.findAll();
  }
}
