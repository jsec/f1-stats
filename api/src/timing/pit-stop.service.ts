import { Inject, Injectable } from '@nestjs/common';

import { PitStop } from './pit-stop.model';

@Injectable()
export class PitStopService {
  constructor(
    @Inject('PIT_STOP_REPOSITORY') private pitStopRepository: typeof PitStop,
  ) {}

  public async findAll(): Promise<PitStop[]> {
    return this.pitStopRepository.findAll();
  }
}
