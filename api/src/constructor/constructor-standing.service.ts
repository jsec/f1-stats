import { ConstructorStanding } from './constructor-standing.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstructorStandingService {
  constructor(
    @InjectModel(ConstructorStanding)
    private constructorStandingModel: typeof ConstructorStanding,
  ) {}

  public async findAll(): Promise<ConstructorStanding[]> {
    return this.constructorStandingModel.findAll();
  }
}
