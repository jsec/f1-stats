import { Constructor } from '@f1-stats/data';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ConstructorService {
  constructor(
    @Inject(Constructor) private readonly model: typeof Constructor
  ) {}

  public async getAll(): Promise<Constructor[]> {
    return this.model.query();
  }
}
