import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Seasons } from '@prisma/client';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Seasons[]> {
    return this.prisma.seasons.findMany();
  }
}
