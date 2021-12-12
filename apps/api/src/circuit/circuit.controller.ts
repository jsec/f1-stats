import { Circuit } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { CircuitService } from './circuit.service';

@Controller('circuit')
export class CircuitController {
  constructor(private readonly circuitService: CircuitService) {}

  @Get()
  public async getAll(): Promise<Circuit[]> {
    return this.circuitService.getAll();
  }
}
