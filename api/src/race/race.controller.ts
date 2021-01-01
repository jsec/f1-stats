import { Controller, Get } from '@nestjs/common';
import { Races } from '@prisma/client';

import { RaceService } from './race.service';

@Controller('races')
export class RaceController {
  constructor(private raceService: RaceService) {}

  @Get()
  public async getAll(): Promise<Races[]> {
    return this.raceService.findAll();
  }
}
