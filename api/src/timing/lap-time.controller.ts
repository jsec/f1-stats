import { Controller, Get } from '@nestjs/common';

import { LapTimeService } from './lap-time.service';
import { LapTimes } from '@prisma/client';

@Controller('lapTimes')
export class LapTimeController {
  constructor(private lapTimeService: LapTimeService) {}

  @Get()
  public async getAll(): Promise<LapTimes[]> {
    return this.lapTimeService.findAll();
  }
}
