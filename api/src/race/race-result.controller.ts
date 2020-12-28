import { Controller, Get } from '@nestjs/common';
import { RaceResultService } from './race-result.service';
import { RaceResults } from '@prisma/client';

@Controller('races/results')
export class RaceResultController {
  constructor(private raceResultService: RaceResultService) {}

  @Get()
  public async getAll(): Promise<RaceResults[]> {
    return this.raceResultService.findAll();
  }
}
