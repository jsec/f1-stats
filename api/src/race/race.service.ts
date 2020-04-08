import { Inject, Injectable } from '@nestjs/common';

import { Race } from './race.model';

@Injectable()
export class RaceService {
  constructor(@Inject('RACE_REPOSITORY') private raceRepository: typeof Race) {}

  public async findAll(): Promise<Race[]> {
    return this.raceRepository.findAll();
  }
}
