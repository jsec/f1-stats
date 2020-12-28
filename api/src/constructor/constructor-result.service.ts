import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ConstructorResults } from '@prisma/client';

@Injectable()
export class ConstructorResultService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorResults[]> {
    return this.prisma.constructorResults.findMany();
  }
}
