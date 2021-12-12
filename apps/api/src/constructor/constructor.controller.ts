import { Constructor } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { ConstructorService } from './constructor.service';

@Controller('constructor')
export class ConstructorController {
  constructor(private readonly constructorService: ConstructorService) {}

  @Get()
  public async getAll(): Promise<Constructor[]> {
    return this.constructorService.getAll();
  }
}
