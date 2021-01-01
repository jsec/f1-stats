import { Injectable } from '@nestjs/common';
import { ConstructorResults } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ConstructorResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorResults[]> {
    return this.prisma.constructorResults.findMany();
  }
}
