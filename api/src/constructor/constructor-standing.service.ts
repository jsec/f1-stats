import { Injectable } from '@nestjs/common';
import { ConstructorStanding } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ConstructorStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorStanding[]> {
    return this.prisma.constructorStanding.findMany();
  }
}
