import { Injectable } from '@nestjs/common';
import { Qualification } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class QualificationService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Qualification[]> {
    return this.prisma.qualification.findMany();
  }
}
