import { Controller, Get } from '@nestjs/common';
import { ConstructorResults } from '@prisma/client';

import { ConstructorResultService } from './constructor-result.service';

@Controller('constructors/results')
export class ConstructorResultController {
  constructor(private constructorResultService: ConstructorResultService) {}

  @Get()
  public async getAll(): Promise<ConstructorResults[]> {
    return this.constructorResultService.findAll();
  }
}
