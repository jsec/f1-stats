import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Races } from '@prisma/client';

@Injectable()
export class RaceService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Races[]> {
    return this.prisma.races.findMany();
  }
}
