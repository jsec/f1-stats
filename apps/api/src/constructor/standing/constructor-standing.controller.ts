import { ConstructorStanding } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { ConstructorStandingService } from './constructor-standing.service';

@Controller('constructor/standing')
export class ConstructorStandingController {
  constructor(
    private readonly constructorStandingService: ConstructorStandingService
  ) {}

  @Get()
  public async getAll(): Promise<ConstructorStanding[]> {
    return this.constructorStandingService.getAll();
  }
}
