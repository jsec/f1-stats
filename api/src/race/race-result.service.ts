import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { RaceResult } from './race-result.model';

@Injectable()
export class RaceResultService {
  constructor(
    @InjectModel(RaceResult) private raceResultModel: typeof RaceResult,
  ) {}

  public async findAll(): Promise<RaceResult[]> {
    return this.raceResultModel.findAll();
  }
}
