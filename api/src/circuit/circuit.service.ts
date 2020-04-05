import { Inject, Injectable } from '@nestjs/common';

import { Circuit } from './circuit.model';

@Injectable()
export class CircuitService {
  constructor(
    @Inject('CIRCUITS_REPOSITORY') private circuitRepository: typeof Circuit,
  ) {}

  public async findAll(): Promise<Circuit[]> {
    return this.circuitRepository.findAll<Circuit>();
  }
}
