import { Race } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RaceService {
  constructor(@Inject(Race) private readonly model: typeof Race) {}

  public async getAll(): Promise<Race[]> {
    return this.model.query();
  }
}
