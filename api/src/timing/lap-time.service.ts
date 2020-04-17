import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { LapTime } from './lap-time.model';

@Injectable()
export class LapTimeService {
  constructor(@InjectModel(LapTime) private lapTimeModel: typeof LapTime) {}

  public async findAll(): Promise<LapTime[]> {
    return this.lapTimeModel.findAll();
  }
}
