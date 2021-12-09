import { Driver } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DriverService {
  constructor(@Inject(Driver) private readonly model: typeof Driver) {}

  public async getAll(): Promise<Driver[]> {
    return this.model.query();
  }
}
