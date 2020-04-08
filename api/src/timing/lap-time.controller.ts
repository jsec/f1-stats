import { Controller, Get } from '@nestjs/common';

import { LapTime } from './lap-time.model';
import { LapTimeService } from './lap-time.service';

@Controller('lapTimes')
export class LapTimeController {
  constructor(private lapTimeService: LapTimeService) {}

  @Get()
  public async getAll(): Promise<LapTime[]> {
    return this.lapTimeService.findAll();
  }
}
