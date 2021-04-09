import { Injectable } from '@nestjs/common';
import { ConstructorStanding } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class ConstructorStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorStanding[]> {
    return this.prisma.constructorStanding.findMany();
  }

  public async findById(id: number): Promise<ConstructorStanding | null> {
    return this.prisma.constructorStanding.findFirst({
      where: {
        id: id
      }
    });
  }
}
