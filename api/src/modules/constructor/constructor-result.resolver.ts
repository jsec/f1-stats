import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { ConstructorResultModel } from './constructor-result.model';
import { ConstructorResultService } from './constructor-result.service';

@Resolver(ConstructorResultModel)
export class ConstructorResultResolver {
  constructor(private constructorResultService: ConstructorResultService) {}

  @Query(returns => ConstructorResultModel)
  public async getConstructorResult(@Args('id') id: number): Promise<ConstructorResultModel> {
    const constructorResult = await this.constructorResultService.findById(id);
    if (!constructorResult) throw new NotFoundException(id);

    return constructorResult;
  }
}
