import { Injectable } from '@nestjs/common';
import { ConstructorResult } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ConstructorResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorResult[]> {
    return this.prisma.constructorResult.findMany();
  }
}
