import { Inject, Injectable } from '@nestjs/common';

import { ConstructorStanding } from './constructor-standing.model';

@Injectable()
export class ConstructorStandingService {
  constructor(
    @Inject('CONSTRUCTOR_STANDINGS_REPOSITORY')
    private constructorStandingRepository: typeof ConstructorStanding,
  ) {}

  public async findAll(): Promise<ConstructorStanding[]> {
    return this.constructorStandingRepository.findAll<ConstructorStanding>();
  }
}
