import { Injectable } from '@nestjs/common';
import { DriverStanding } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class DriverStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<DriverStanding[]> {
    return this.prisma.driverStanding.findMany();
  }
}
