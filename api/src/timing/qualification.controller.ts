import { Controller, Get } from '@nestjs/common';
import { QualificationService } from './qualification.service';
import { Qualifications } from '@prisma/client';

@Controller('qualifications')
export class QualificationController {
  constructor(private qualificationService: QualificationService) {}

  @Get()
  public async getAll(): Promise<Qualifications[]> {
    return this.qualificationService.findAll();
  }
}
