import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { LapTimeModel } from './lap-time.model';
import { LapTimeService } from './lap-time.service';

@Resolver(LapTimeModel)
export class LapTimeResolver {
  constructor(private lapTimeService: LapTimeService) {}

  @Query(returns => LapTimeModel)
  public async lapTime(@Args('id') id: number): Promise<LapTimeModel> {
    const lapTime = await this.lapTimeService.findById(id);
    if (!lapTime) throw new NotFoundException(id);

    return lapTime;
  }
}
