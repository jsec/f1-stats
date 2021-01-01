import { Controller, Get } from '@nestjs/common';
import { Circuits } from '@prisma/client';

import { CircuitService } from './circuit.service';

@Controller('circuits')
export class CircuitController {
  constructor(private circuitService: CircuitService) {}

  @Get()
  public async getAll(): Promise<Circuits[]> {
    return this.circuitService.findAll();
  }
}
