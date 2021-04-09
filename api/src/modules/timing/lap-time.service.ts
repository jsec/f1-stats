import { Injectable } from '@nestjs/common';
import { LapTime } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class LapTimeService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<LapTime[]> {
    return this.prisma.lapTime.findMany();
  }

  public async findById(id: number): Promise<LapTime | null> {
    return this.prisma.lapTime.findFirst({
      where: {
        id: id
      }
    });
  }
}
