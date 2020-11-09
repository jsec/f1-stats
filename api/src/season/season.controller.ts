import { Controller, Get } from '@nestjs/common';
import { SeasonService } from './season.service';
import { season } from '@prisma/client';

@Controller('seasons')
export class SeasonController {
  constructor(private seasonService: SeasonService) {}

  @Get()
  public async getAll(): Promise<season[]> {
    return this.seasonService.findAll();
  }
}
