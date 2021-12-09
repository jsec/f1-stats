import { DriverStanding } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DriverStandingService {
  constructor(
    @Inject(DriverStanding) private readonly model: typeof DriverStanding
  ) {}

  public async getAll(): Promise<DriverStanding[]> {
    return this.model.query();
  }

  public async getById(id: number): Promise<DriverStanding | undefined> {
    return this.model
      .query()
      .limit(1)
      .where('standing_id', id)
      .withGraphJoined('[driver, race]')
      .first();
  }
}
