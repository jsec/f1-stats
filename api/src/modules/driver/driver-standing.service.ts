import { Injectable } from '@nestjs/common';
import { DriverStanding } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class DriverStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<DriverStanding[]> {
    return this.prisma.driverStanding.findMany();
  }
}
