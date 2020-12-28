import { Injectable } from '@nestjs/common';
import { Drivers } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Drivers[]> {
    return this.prisma.drivers.findMany();
  }
}
