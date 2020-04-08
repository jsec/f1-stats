import { Inject, Injectable } from '@nestjs/common';

import { Constructor } from './constructor.model';

@Injectable()
export class ConstructorService {
  constructor(
    @Inject('CONSTRUCTORS_REPOSITORY')
    private constructorRepository: typeof Constructor,
  ) {}

  public async findAll(): Promise<Constructor[]> {
    return this.constructorRepository.findAll<Constructor>();
  }
}
