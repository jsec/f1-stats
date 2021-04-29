import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Query,
  Resolver
} from '@nestjs/graphql';

import { StatusModel } from './status.model';
import { StatusService } from './status.service';

@Resolver(StatusModel)
export class StatusResolver {
  constructor(private statusService: StatusService) {}

  @Query((returns) => StatusModel)
  public async status(@Args('id') id: number): Promise<StatusModel> {
    const status = await this.statusService.findById(id);
    if (!status) throw new NotFoundException(id);

    return status;
  }
}
