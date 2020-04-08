import { Controller, Get } from '@nestjs/common';

import { Season } from './season.model';
import { SeasonService } from './season.service';

@Controller('seasons')
export class SeasonController {
  constructor(private seasonService: SeasonService) {}

  @Get()
  public async getAll(): Promise<Season[]> {
    return this.seasonService.findAll();
  }
}
