import { Qualifying } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class QualifyingService {
  constructor(@Inject(Qualifying) private readonly model: typeof Qualifying) {}

  public async getAll(): Promise<Qualifying[]> {
    return this.model.query();
  }
}
