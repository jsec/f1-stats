import { ConstructorResult } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ConstructorResultService {
  constructor(
    @Inject(ConstructorResult) private readonly model: typeof ConstructorResult
  ) {}

  public async getAll(): Promise<ConstructorResult[]> {
    return this.model.query();
  }
}
