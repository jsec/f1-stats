import { Circuit } from './circuit.model';
import { CircuitController } from './circuit.controller';
import { CircuitService } from './circuit.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [SequelizeModule.forFeature([Circuit])],
  controllers: [CircuitController],
  providers: [CircuitService, PrismaService],
})
export class CircuitModule {}
