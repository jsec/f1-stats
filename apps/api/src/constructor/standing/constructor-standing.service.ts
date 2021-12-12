import { ConstructorStanding } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ConstructorStandingService {
  constructor(
    @Inject(ConstructorStanding)
    private readonly model: typeof ConstructorStanding
  ) {}

  public async getAll(): Promise<ConstructorStanding[]> {
    return this.model.query();
  }
}
