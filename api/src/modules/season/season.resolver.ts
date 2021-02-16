import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { SeasonModel } from './season.model';
import { SeasonService } from './season.service';

@Resolver(SeasonModel)
export class SeasonResolver {
  constructor(private seasonService: SeasonService) {}

  @Query(returns => SeasonModel)
  public async season(@Args('id') id: number): Promise<SeasonModel> {
    const season = await this.seasonService.findById(id);
    if (!season) throw new NotFoundException(id);

    return season;
  }
}
