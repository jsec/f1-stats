import { LapTime } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { LapTimeService } from './lap-time.service';

@Controller('lapTime')
export class LapTimeController {
  constructor(private readonly lapTimeService: LapTimeService) {}

  @Get()
  public async getAll(): Promise<LapTime[]> {
    return this.lapTimeService.getAll();
  }
}
