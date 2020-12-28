import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';
import { Statuses } from '@prisma/client';

@Controller('statuses')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @Get()
  public async getAll(): Promise<Statuses[]> {
    return this.statusService.findAll();
  }
}
