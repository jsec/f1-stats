import { Controller, Get } from '@nestjs/common';

import { PitStopService } from './pit-stop.service';
import { PitStops } from '@prisma/client';

@Controller('pitStops')
export class PitStopController {
  constructor(private pitStopService: PitStopService) {}

  @Get()
  public async getAll(): Promise<PitStops[]> {
    return this.pitStopService.findAll();
  }
}
