import { PitStop } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { PitStopService } from './pit-stop.service';

@Controller('circuit')
export class PitStopController {
  constructor(private readonly pitStopService: PitStopService) {}

  @Get()
  public async getAll(): Promise<PitStop[]> {
    return this.pitStopService.getAll();
  }
}
