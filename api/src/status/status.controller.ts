import { Controller, Get } from '@nestjs/common';
import { Statuses } from '@prisma/client';

import { StatusService } from './status.service';

@Controller('statuses')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  public async getAll(): Promise<Statuses[]> {
    return this.statusService.findAll();
  }
}
