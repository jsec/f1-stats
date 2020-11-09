import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Race } from './race.model';

@Injectable()
export class RaceService {
  constructor(@InjectModel(Race) private raceModel: typeof Race) {}

  public async findAll(): Promise<Race[]> {
    return this.raceModel.findAll();
  }
}
