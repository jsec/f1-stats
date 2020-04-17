import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Season } from './season.model';

@Injectable()
export class SeasonService {
  constructor(@InjectModel(Season) private seasonModel: typeof Season) {}

  public async findAll(): Promise<Season[]> {
    return this.seasonModel.findAll();
  }
}
