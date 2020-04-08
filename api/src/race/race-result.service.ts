import { Inject, Injectable } from '@nestjs/common';

import { RaceResult } from './race-result.model';

@Injectable()
export class RaceResultService {
  constructor(
    @Inject('RACE_RESULTS_REPOSITORY')
    private raceResultRepository: typeof RaceResult,
  ) {}

  public async findAll(): Promise<RaceResult[]> {
    return this.raceResultRepository.findAll();
  }
}
