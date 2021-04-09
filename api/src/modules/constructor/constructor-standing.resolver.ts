import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { ConstructorStandingModel } from './constructor-standing.model';
import { ConstructorStandingService } from './constructor-standing.service';

@Resolver(ConstructorStandingModel)
export class ConstructorStandingResolver {
  constructor(private constructorStandingService: ConstructorStandingService) {}

  @Query(returns => ConstructorStandingModel)
  public async constructorstanding(@Args('id') id: number): Promise<ConstructorStandingModel> {
    const constructorStanding = await this.constructorStandingService.findById(id);
    if (!constructorStanding) throw new NotFoundException(id);

    return constructorStanding;
  }
}
