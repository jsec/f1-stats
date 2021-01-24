import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Status[]> {
    return this.prisma.status.findMany();
  }
}
