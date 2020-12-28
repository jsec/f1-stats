import { Controller, Get } from '@nestjs/common';
import { ConstructorStandingService } from './constructor-standing.service';
import { ConstructorStandings } from '@prisma/client';

@Controller('constructors/standings')
export class ConstructorStandingController {
  constructor(private constructorStandingService: ConstructorStandingService) {}

  @Get()
  public async getAll(): Promise<ConstructorStandings[]> {
    return this.constructorStandingService.findAll();
  }
}
