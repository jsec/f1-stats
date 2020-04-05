import { CircuitController } from './circuit.controller';
import { CircuitService } from './circuit.service';
import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { circuitProviders } from './circuit.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CircuitController],
  providers: [CircuitService, ...circuitProviders],
})
export class CircuitModule {}
