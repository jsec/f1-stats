import { Controller, Get } from '@nestjs/common';
import { Constructors } from '@prisma/client';

import { ConstructorService } from './constructor.service';

@Controller('constructors')
export class ConstructorController {
  constructor(private constructorService: ConstructorService) {}

  @Get()
  public async getAll(): Promise<Constructors[]> {
    return this.constructorService.findAll();
  }
}
