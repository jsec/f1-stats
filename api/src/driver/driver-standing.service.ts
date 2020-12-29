import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { DriverStandings } from '@prisma/client';

@Injectable()
export class DriverStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<DriverStandings[]> {
    return this.prisma.driverStandings.findMany();
  }
}
