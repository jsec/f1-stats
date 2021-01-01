import { Injectable } from '@nestjs/common';
import { Races } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class RaceService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Races[]> {
    return this.prisma.races.findMany();
  }
}
