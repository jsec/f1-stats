import { Injectable } from '@nestjs/common';
import { RaceResults } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RaceResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<RaceResults[]> {
    return this.prisma.raceResults.findMany();
  }
}
