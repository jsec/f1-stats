import { Controller, Get } from '@nestjs/common';

import { PitStop } from './pit-stop.model';
import { PitStopService } from './pit-stop.service';

@Controller('pitStops')
export class PitStopController {
  constructor(private pitStopService: PitStopService) {}

  @Get()
  public async getAll(): Promise<PitStop[]> {
    return this.pitStopService.findAll();
  }
}
