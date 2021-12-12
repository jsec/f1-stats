import { LapTime } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class LapTimeService {
  constructor(@Inject(LapTime) private readonly model: typeof LapTime) {}

  public async getAll(): Promise<LapTime[]> {
    return this.model.query();
  }
}
