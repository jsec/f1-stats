import { Circuit } from './circuit.model';
import { CircuitController } from './circuit.controller';
import { CircuitService } from './circuit.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Circuit])],
  controllers: [CircuitController],
  providers: [CircuitService],
})
export class CircuitModule {}
