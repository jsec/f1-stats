import { Controller, Get } from '@nestjs/common';
import { RaceService } from './race.service';
import { Races } from '@prisma/client';

@Controller('races')
export class RaceController {
  constructor(private raceService: RaceService) {}

  @Get()
  public async getAll(): Promise<Races[]> {
    return this.raceService.findAll();
  }
}
