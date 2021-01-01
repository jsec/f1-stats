import { Injectable } from '@nestjs/common';
import { Seasons } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Seasons[]> {
    return this.prisma.seasons.findMany();
  }
}
