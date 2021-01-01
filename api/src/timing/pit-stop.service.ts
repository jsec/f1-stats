import { Injectable } from '@nestjs/common';
import { PitStops } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class PitStopService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<PitStops[]> {
    return this.prisma.pitStops.findMany();
  }
}
