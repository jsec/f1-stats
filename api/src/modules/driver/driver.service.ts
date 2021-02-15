import { Injectable } from '@nestjs/common';
import { Driver } from '@prisma/client';

import { PrismaService } from '../../core';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Driver[]> {
    return this.prisma.driver.findMany();
  }
}
