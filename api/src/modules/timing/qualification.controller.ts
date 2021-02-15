import { Controller, Get } from '@nestjs/common';
import { Qualification } from '@prisma/client';

import { QualificationService } from './qualification.service';

@Controller('qualifications')
export class QualificationController {
  constructor(private qualificationService: QualificationService) {}

  @Get()
  public async getAll(): Promise<Qualification[]> {
    return this.qualificationService.findAll();
  }
}
