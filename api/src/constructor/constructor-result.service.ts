import { Inject, Injectable } from '@nestjs/common';

import { ConstructorResult } from './constructor-result.model';

@Injectable()
export class ConstructorResultService {
  constructor(
    @Inject('CONSTRUCTOR_RESULTS_REPOSITORY')
    private constructorResultRepository: typeof ConstructorResult,
  ) {}

  public async findAll(): Promise<ConstructorResult[]> {
    return this.constructorResultRepository.findAll<ConstructorResult>();
  }
}
