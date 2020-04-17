import { Constructor } from './constructor.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstructorService {
  constructor(
    @InjectModel(Constructor) private constructorModel: typeof Constructor,
  ) {}

  public async findAll(): Promise<Constructor[]> {
    return this.constructorModel.findAll();
  }
}
