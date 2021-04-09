import { Injectable } from '@nestjs/common';
import { Constructor } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class ConstructorService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Constructor[]> {
    return this.prisma.constructor.findMany();
  }

  public async findById(id: number): Promise<Constructor | null> {
    return this.prisma.constructor.findFirst({
      where: {
        id: id
      }
    });
  }
}
