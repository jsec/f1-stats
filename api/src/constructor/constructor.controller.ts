import { Controller, Get } from '@nestjs/common';
import { ConstructorService } from './constructor.service';
import { Constructors } from '@prisma/client';

@Controller('constructors')
export class ConstructorController {
  constructor(private constructorService: ConstructorService) {}

  @Get()
  public async getAll(): Promise<Constructors[]> {
    return this.constructorService.findAll();
  }
}
