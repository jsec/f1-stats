import { Inject, Injectable } from '@nestjs/common';

import { Qualification } from './qualification.model';

@Injectable()
export class QualificationService {
  constructor(
    @Inject('QUALIFICATION_REPOSITORY')
    private qualificationRepository: typeof Qualification,
  ) {}

  public async findAll(): Promise<Qualification[]> {
    return this.qualificationRepository.findAll();
  }
}
