import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { CircuitController } from './circuit.controller';
import { CircuitService } from './circuit.service';

@Module({
  controllers: [CircuitController],
  providers: [ CircuitService, PrismaService ]
})
export class CircuitModule {}
