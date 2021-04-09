import { Injectable } from '@nestjs/common';
import { Driver } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Driver[]> {
    return this.prisma.driver.findMany();
  }

  public async findById(id: number): Promise<Driver | null> {
    return this.prisma.driver.findFirst({
      where: {
        id: id
      }
    });
  }
}
