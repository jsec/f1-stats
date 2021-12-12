import { Qualifying } from '@f1-stats/data';
import { Controller, Get } from '@nestjs/common';
import { QualifyingService } from './qualifying.service';

@Controller('qualifying')
export class QualifyingController {
  constructor(private readonly qualifyingService: QualifyingService) {}

  @Get()
  public async getAll(): Promise<Qualifying[]> {
    return this.qualifyingService.getAll();
  }
}
