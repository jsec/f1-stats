import { Injectable } from '@nestjs/common';
import { Qualifications } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class QualificationService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Qualifications[]> {
    return this.prisma.qualifications.findMany();
  }
}
