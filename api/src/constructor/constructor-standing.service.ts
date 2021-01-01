import { Injectable } from '@nestjs/common';
import { ConstructorStandings } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ConstructorStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorStandings[]> {
    return this.prisma.constructorStandings.findMany();
  }
}
