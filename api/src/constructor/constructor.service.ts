import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Constructors } from '@prisma/client';

@Injectable()
export class ConstructorService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Constructors[]> {
    return this.prisma.constructors.findMany();
  }
}
