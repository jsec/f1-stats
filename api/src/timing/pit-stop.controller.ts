import { Controller, Get } from '@nestjs/common';
import { PitStops } from '@prisma/client';

import { PitStopService } from './pit-stop.service';

@Controller('pitStops')
export class PitStopController {
  constructor(private pitStopService: PitStopService) {}

  @Get()
  public async getAll(): Promise<PitStops[]> {
    return this.pitStopService.findAll();
  }
}
