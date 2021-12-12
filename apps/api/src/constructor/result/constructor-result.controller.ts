import { ConstructorResult } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { ConstructorResultService } from './constructor-result.service';

@Controller('constructor/result')
export class ConstructorResultController {
  constructor(
    private readonly constructorResultService: ConstructorResultService
  ) {}

  @Get()
  public async getAll(): Promise<ConstructorResult[]> {
    return this.constructorResultService.getAll();
  }
}
