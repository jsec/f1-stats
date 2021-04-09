import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { RaceResultModel } from './race-result.model';
import { RaceResultService } from './race-result.service';

@Resolver(RaceResultModel)
export class RaceResultResolver {
  constructor(private raceResultService: RaceResultService) {}

  @Query(returns => RaceResultModel)
  public async raceResult(@Args('id') id: number): Promise<RaceResultModel> {
    const raceResult = await this.raceResultService.findById(id);
    if (!raceResult) throw new NotFoundException(id);

    return raceResult;
  }
}
