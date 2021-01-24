import { Controller, Get } from '@nestjs/common';
import { RaceResult } from '@prisma/client';

import { RaceResultService } from './race-result.service';

@Controller('races/results')
export class RaceResultController {
  constructor(private raceResultService: RaceResultService) {}

  @Get()
  public async getAll(): Promise<RaceResult[]> {
    return this.raceResultService.findAll();
  }
}
