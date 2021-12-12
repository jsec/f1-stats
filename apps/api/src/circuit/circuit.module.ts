import { DataModule } from '@f1-stats/data';
import { Module } from '@nestjs/common';
import { CircuitController } from './circuit.controller';
import { CircuitService } from './circuit.service';

@Module({
  imports: [DataModule],
  controllers: [CircuitController],
  providers: [CircuitService]
})
export class CircuitModule {}
