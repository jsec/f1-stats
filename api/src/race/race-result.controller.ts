import { Controller, Get } from '@nestjs/common';
import { RaceResults } from '@prisma/client';

import { RaceResultService } from './race-result.service';

@Controller('races/results')
export class RaceResultController {
  constructor(private raceResultService: RaceResultService) {}

  @Get()
  public async getAll(): Promise<RaceResults[]> {
    return this.raceResultService.findAll();
  }
}
