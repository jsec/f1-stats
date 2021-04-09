import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { ConstructorModel } from './constructor.model';
import { ConstructorService } from './constructor.service';

@Resolver(ConstructorModel)
export class ConstructorResolver {
  constructor(private constructorService: ConstructorService) {}

  @Query(returns => ConstructorModel)
  public async getConstructor(@Args('id') id: number): Promise<ConstructorModel> {
    const constructor = await this.constructorService.findById(id);
    if (!constructor) throw new NotFoundException(id);

    return constructor;
  }
}
