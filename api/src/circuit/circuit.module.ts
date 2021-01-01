import { CircuitController } from './circuit.controller';
import { CircuitService } from './circuit.service';
import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [CircuitController],
  providers: [CircuitService, PrismaService]
})
export class CircuitModule {}
