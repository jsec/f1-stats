import { Injectable } from '@nestjs/common';
import { Season } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Season[]> {
    return this.prisma.season.findMany();
  }
}
