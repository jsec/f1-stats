import { Controller, Get } from '@nestjs/common';
import { Circuit } from '@prisma/client';

import { CircuitService } from './circuit.service';

@Controller('circuits')
export class CircuitController {
  constructor(private circuitService: CircuitService) {}

  @Get()
  public async getAll(): Promise<Circuit[]> {
    return this.circuitService.findAll();
  }
}
