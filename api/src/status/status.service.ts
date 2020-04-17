import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Status } from './status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusModel: typeof Status) {}

  public async findAll(): Promise<Status[]> {
    return this.statusModel.findAll();
  }
}
