import { Controller, Get } from '@nestjs/common';

import { ConstructorResult } from './constructor-result.model';
import { ConstructorResultService } from './constructor-result.service';

@Controller('constructors/results')
export class ConstructorResultController {
  constructor(private constructorResultService: ConstructorResultService) {}

  @Get()
  public async getAll(): Promise<ConstructorResult[]> {
    return this.constructorResultService.findAll();
  }
}
