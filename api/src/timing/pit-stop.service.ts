import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { PitStops } from '@prisma/client';

@Injectable()
export class PitStopService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<PitStops[]> {
    return this.prisma.pitStops.findMany();
  }
}
