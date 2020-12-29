import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { ConstructorStandings } from '@prisma/client';

@Injectable()
export class ConstructorStandingService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<ConstructorStandings[]> {
    return this.prisma.constructorStandings.findMany();
  }
}
