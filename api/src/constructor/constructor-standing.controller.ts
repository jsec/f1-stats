import { Controller, Get } from '@nestjs/common';
import { ConstructorStandings } from '@prisma/client';

import { ConstructorStandingService } from './constructor-standing.service';

@Controller('constructors/standings')
export class ConstructorStandingController {
  constructor(private constructorStandingService: ConstructorStandingService) {}

  @Get()
  public async getAll(): Promise<ConstructorStandings[]> {
    return this.constructorStandingService.findAll();
  }
}
