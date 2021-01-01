import { Injectable } from '@nestjs/common';
import { Constructors } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ConstructorService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Constructors[]> {
    return this.prisma.constructors.findMany();
  }
}
