import { Injectable } from '@nestjs/common';
import { Statuses } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Statuses[]> {
    return this.prisma.statuses.findMany();
  }
}
