import { Injectable } from '@nestjs/common';
import { Circuit } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class CircuitService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Circuit[]> {
    return this.prisma.circuit.findMany();
  }
}
