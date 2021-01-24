import { Injectable } from '@nestjs/common';
import { Driver } from '@prisma/client';

import { PrismaService } from '../services/prisma.service';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<Driver[]> {
    return this.prisma.driver.findMany();
  }
}
