import { Season } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { SeasonService } from './season.service';

@Controller('season')
export class SeasonController {
  constructor(private readonly seasonService: SeasonService) {}

  @Get()
  public async getAll(): Promise<Season[]> {
    return this.seasonService.getAll();
  }
}
