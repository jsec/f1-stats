import { Injectable } from '@nestjs/common';
import { Circuits } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class CircuitService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Circuits[]> {
    return this.prisma.circuits.findMany();
  }
}
