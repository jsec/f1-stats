import { Injectable } from '@nestjs/common';
import { RaceResult } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RaceResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<RaceResult[]> {
    return this.prisma.raceResult.findMany();
  }
}
