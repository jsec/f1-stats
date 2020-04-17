import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Qualification } from './qualification.model';

@Injectable()
export class QualificationService {
  constructor(
    @InjectModel(Qualification)
    private qualificationModel: typeof Qualification,
  ) {}

  public async findAll(): Promise<Qualification[]> {
    return this.qualificationModel.findAll();
  }
}
