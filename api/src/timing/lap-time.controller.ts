import { Controller, Get } from '@nestjs/common';
import { LapTimes } from '@prisma/client';

import { LapTimeService } from './lap-time.service';

@Controller('lapTimes')
export class LapTimeController {
  constructor(private lapTimeService: LapTimeService) {}

  @Get()
  public async getAll(): Promise<LapTimes[]> {
    return this.lapTimeService.findAll();
  }
}
