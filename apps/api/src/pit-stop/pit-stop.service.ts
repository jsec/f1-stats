import { PitStop } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PitStopService {
  constructor(@Inject(PitStop) private readonly model: typeof PitStop) {}

  public async getAll(): Promise<PitStop[]> {
    return this.model.query();
  }
}
