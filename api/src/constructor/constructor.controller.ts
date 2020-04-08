import { Controller, Get } from '@nestjs/common';

import { Constructor } from './constructor.model';
import { ConstructorService } from './constructor.service';

@Controller('constructors')
export class ConstructorController {
  constructor(private constructorService: ConstructorService) {}

  @Get()
  public async getAll(): Promise<Constructor[]> {
    return this.constructorService.findAll();
  }
}
