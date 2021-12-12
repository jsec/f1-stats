import { RaceResult } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RaceResultService {
  constructor(@Inject(RaceResult) private readonly model: typeof RaceResult) {}

  public async getAll(): Promise<RaceResult[]> {
    return this.model.query();
  }
}
