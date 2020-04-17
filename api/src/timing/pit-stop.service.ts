import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { PitStop } from './pit-stop.model';

@Injectable()
export class PitStopService {
  constructor(@InjectModel(PitStop) private pitStopModel: typeof PitStop) {}

  public async findAll(): Promise<PitStop[]> {
    return this.pitStopModel.findAll();
  }
}
