import { Controller, Get } from '@nestjs/common';
import { CircuitService } from './circuit.service';
import { Circuits } from '@prisma/client';

@Controller('circuits')
export class CircuitController {
  constructor(private circuitService: CircuitService) {}

  @Get()
  public async getAll(): Promise<Circuits[]> {
    return this.circuitService.findAll();
  }
}
