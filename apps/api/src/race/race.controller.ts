import { Race } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { RaceService } from './race.service';

@Controller('race')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Get()
  public async getAll(): Promise<Race[]> {
    return this.raceService.getAll();
  }
}
