import { Injectable } from '@nestjs/common';
import { DriverStandings } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class DriverStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<DriverStandings[]> {
    return this.prisma.driverStandings.findMany();
  }
}
