import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { RaceResults } from '@prisma/client';

@Injectable()
export class RaceResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<RaceResults[]> {
    return this.prisma.raceResults.findMany();
  }
}
