import { Injectable } from '@nestjs/common';
import { PitStop } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class PitStopService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<PitStop[]> {
    return this.prisma.pitStop.findMany();
  }
}
