import { Injectable } from '@nestjs/common';
import { Race } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class RaceService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Race[]> {
    return this.prisma.race.findMany();
  }

  public async findById(id: number): Promise<Race | null> {
    return this.prisma.race.findFirst({
      where: {
        id: id
      }
    });
  }
}
