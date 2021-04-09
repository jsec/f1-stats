import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Status[]> {
    return this.prisma.status.findMany();
  }

  public async findById(id: number): Promise<Status | null> {
    return this.prisma.status.findFirst({
      where: {
        id: id
      }
    });
  }
}
