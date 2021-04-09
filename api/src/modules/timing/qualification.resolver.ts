import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { QualificationModel } from './qualification.model';
import { QualificationService } from './qualification.service';

@Resolver(QualificationModel)
export class QualificationResolver {
  constructor(private qualificationService: QualificationService) {}

  @Query(returns => QualificationModel)
  public async qualification(@Args('id') id: number): Promise<QualificationModel> {
    const qualification = await this.qualificationService.findById(id);
    if (!qualification) throw new NotFoundException(id);

    return qualification;
  }
}
