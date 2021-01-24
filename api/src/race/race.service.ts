import { Injectable } from '@nestjs/common';
import { Race } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RaceService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Race[]> {
    return this.prisma.race.findMany();
  }
}
