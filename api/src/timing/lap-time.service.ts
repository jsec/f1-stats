import { Injectable } from '@nestjs/common';
import { LapTimes } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class LapTimeService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<LapTimes[]> {
    return this.prisma.lapTimes.findMany();
  }
}
