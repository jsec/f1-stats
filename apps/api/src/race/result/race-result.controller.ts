import { RaceResult } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { RaceResultService } from './race-result.service';

@Controller('race/result')
export class RaceResultController {
  constructor(private readonly raceResultService: RaceResultService) {}

  @Get()
  public async getAll(): Promise<RaceResult[]> {
    return this.raceResultService.getAll();
  }
}
