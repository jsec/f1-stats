import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Query,
  Resolver
} from '@nestjs/graphql';

import { CircuitModel } from './circuit.model';
import { CircuitService } from './circuit.service';

@Resolver(CircuitModel)
export class CircuitResolver {
  constructor(private circuitService: CircuitService) {}

  @Query((returns) => CircuitModel)
  public async circuit(@Args('id') id: number): Promise<CircuitModel> {
    const circuit = await this.circuitService.findById(id);
    if (!circuit) throw new NotFoundException(id);

    return circuit;
  }
}
