import { Controller, Get } from '@nestjs/common';
import { ConstructorResultService } from './constructor-result.service';
import { ConstructorResults } from '@prisma/client';

@Controller('constructors/results')
export class ConstructorResultController {
  constructor(private constructorResultService: ConstructorResultService) {}

  @Get()
  public async getAll(): Promise<ConstructorResults[]> {
    return this.constructorResultService.findAll();
  }
}
