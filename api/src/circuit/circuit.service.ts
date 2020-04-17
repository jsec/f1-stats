import { Circuit } from './circuit.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CircuitService {
  constructor(@InjectModel(Circuit) private circuitModel: typeof Circuit) {}

  public async findAll(): Promise<Circuit[]> {
    return this.circuitModel.findAll();
  }
}
