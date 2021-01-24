import { Injectable } from '@nestjs/common';
import { Constructor } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class ConstructorService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Constructor[]> {
    return this.prisma.constructor.findMany();
  }
}
