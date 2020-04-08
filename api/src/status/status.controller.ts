import { Controller, Get } from '@nestjs/common';

import { Status } from './status.model';
import { StatusService } from './status.service';

@Controller('statuses')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  public async getAll(): Promise<Status[]> {
    return this.statusService.findAll();
  }
}
