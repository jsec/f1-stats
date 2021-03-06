import { Injectable } from '@nestjs/common';
import { Season } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Season[]> {
    return this.prisma.season.findMany();
  }

  public async findById(id: number): Promise<Season | null> {
    return this.prisma.season.findFirst({
      where: {
        id: id
      }
    });
  }
}
