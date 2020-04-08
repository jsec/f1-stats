import { Inject, Injectable } from '@nestjs/common';

import { LapTime } from './lap-time.model';

@Injectable()
export class LapTimeService {
  constructor(
    @Inject('LAP_TIMES_REPOSITORY') private lapTimeRepository: typeof LapTime,
  ) {}

  public async findAll(): Promise<LapTime[]> {
    return this.lapTimeRepository.findAll<LapTime>();
  }
}
