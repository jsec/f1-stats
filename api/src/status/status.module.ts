import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './status.model';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

@Module({
  imports: [SequelizeModule.forFeature([Status])],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
