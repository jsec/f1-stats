import { Driver } from './driver.model';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverStanding } from './driver-standing.model';
import { DriverStandingController } from './driver-standing.controller';
import { DriverStandingService } from './driver-standing.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [SequelizeModule.forFeature([Driver, DriverStanding])],
  controllers: [DriverController, DriverStandingController],
  providers: [DriverService, DriverStandingService, PrismaService],
})
export class DriverModule {}
