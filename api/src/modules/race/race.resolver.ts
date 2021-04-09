import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { RaceModel } from './race.model';
import { RaceService } from './race.service';

@Resolver(RaceModel)
export class RaceResolver {
  constructor(private raceService: RaceService) {}

  @Query(returns => RaceModel)
  public async race(@Args('id') id: number): Promise<RaceModel> {
    const race = await this.raceService.findById(id);
    if (!race) throw new NotFoundException(id);

    return race;
  }
}
