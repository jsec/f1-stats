import { Controller, Get } from '@nestjs/common';

import { ConstructorStanding } from './constructor-standing.model';
import { ConstructorStandingService } from './constructor-standing.service';

@Controller('constructors/standings')
export class ConstructorStandingController {
  constructor(private constructorStandingService: ConstructorStandingService) {}

  @Get()
  public async getAll(): Promise<ConstructorStanding[]> {
    return this.constructorStandingService.findAll();
  }
}
