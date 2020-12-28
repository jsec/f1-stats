import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Circuits } from '@prisma/client';

@Injectable()
export class CircuitService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Circuits[]> {
    return this.prisma.circuits.findMany();
  }
}
