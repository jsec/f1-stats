import { Inject, Injectable } from '@nestjs/common';

import { Season } from './season.model';

@Injectable()
export class SeasonService {
  constructor(
    @Inject('SEASONS_REPOSITORY') private seasonRepository: typeof Season,
  ) {}

  public async findAll(): Promise<Season[]> {
    return this.seasonRepository.findAll();
  }
}
