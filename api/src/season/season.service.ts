import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { season } from '@prisma/client';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<season[]> {
    return this.prisma.season.findMany();
  }
}
