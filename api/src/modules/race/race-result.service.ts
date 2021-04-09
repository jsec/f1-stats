import { Injectable } from '@nestjs/common';
import { RaceResult } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class RaceResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<RaceResult[]> {
    return this.prisma.raceResult.findMany();
  }

  public async findById(id: number): Promise<RaceResult | null> {
    return this.prisma.raceResult.findFirst({
      where: {
        id: id
      }
    });
  }
}
