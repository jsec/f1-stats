import { Module } from '@nestjs/common';
import { SeasonController } from './season.controller';
import { SeasonService } from './season.service';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [SeasonController],
  providers: [SeasonService, PrismaService]
})
export class SeasonModule {}
