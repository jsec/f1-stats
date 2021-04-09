import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { CircuitResolver } from './circuit.resolver';
import { CircuitService } from './circuit.service';

@Module({
  providers: [ CircuitResolver, CircuitService, PrismaService ]
})
export class CircuitModule {}
