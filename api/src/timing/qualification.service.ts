import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Qualifications } from '@prisma/client';

@Injectable()
export class QualificationService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Qualifications[]> {
    return this.prisma.qualifications.findMany();
  }
}
