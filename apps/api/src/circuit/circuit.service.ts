import { Circuit } from '@f1-stats/data';
import { Inject , Injectable } from '@nestjs/common';

@Injectable()
export class CircuitService {
  constructor(@Inject(Circuit) private readonly model: typeof Circuit) {}

  public async getAll(): Promise<Circuit[]> {
    return this.model.query();
  }
}
