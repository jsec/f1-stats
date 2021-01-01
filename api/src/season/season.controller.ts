import { Controller, Get } from '@nestjs/common';
import { Seasons } from '@prisma/client';

import { SeasonService } from './season.service';

@Controller('seasons')
export class SeasonController {
  constructor(private seasonService: SeasonService) {}

  @Get()
  public async getAll(): Promise<Seasons[]> {
    return this.seasonService.findAll();
  }
}
