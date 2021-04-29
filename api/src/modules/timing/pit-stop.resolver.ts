import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Query,
  Resolver
} from '@nestjs/graphql';

import { PitStopModel } from './pit-stop.model';
import { PitStopService } from './pit-stop.service';

@Resolver(PitStopModel)
export class PitStopResolver {
  constructor(private pitStopService: PitStopService) {}

  @Query((returns) => PitStopModel)
  public async pitStop(@Args('id') id: number): Promise<PitStopModel> {
    const pitStop = await this.pitStopService.findById(id);
    if (!pitStop) throw new NotFoundException(id);

    return pitStop;
  }
}
