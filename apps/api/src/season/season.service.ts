import { Inject, Injectable } from '@nestjs/common';
import { Season } from '@f1-stats/data';

@Injectable()
export class SeasonService {
  constructor(@Inject(Season) private readonly model: typeof Season) {}

  public async getAll(): Promise<Season[]> {
    return this.model.query();
  }
}
