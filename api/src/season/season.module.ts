import { Module } from '@nestjs/common';
import { Season } from './season.model';
import { SeasonController } from './season.controller';
import { SeasonService } from './season.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Season])],
  controllers: [SeasonController],
  providers: [SeasonService],
})
export class SeasonModule {}
