import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './status.model';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [SequelizeModule.forFeature([Status])],
  controllers: [StatusController],
  providers: [StatusService, PrismaService],
})
export class StatusModule {}
