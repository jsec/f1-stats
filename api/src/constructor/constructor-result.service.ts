import { ConstructorResult } from './constructor-result.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstructorResultService {
  constructor(
    @InjectModel(ConstructorResult)
    private constructorResultModel: typeof ConstructorResult,
  ) {}

  public async findAll(): Promise<ConstructorResult[]> {
    return this.constructorResultModel.findAll();
  }
}
