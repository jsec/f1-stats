import { Injectable } from '@nestjs/common';
import { ConstructorResult } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class ConstructorResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorResult[]> {
    return this.prisma.constructorResult.findMany();
  }

  public async findById(id: number): Promise<ConstructorResult | null> {
    return this.prisma.constructorResult.findFirst({
      where: {
        id: id
      }
    });
  }
}
