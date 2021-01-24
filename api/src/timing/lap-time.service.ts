import { Injectable } from '@nestjs/common';
import { LapTime } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class LapTimeService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<LapTime[]> {
    return this.prisma.lapTime.findMany();
  }
}
