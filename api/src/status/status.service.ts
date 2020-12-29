import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Statuses } from '@prisma/client';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Statuses[]> {
    return this.prisma.statuses.findMany();
  }
}
