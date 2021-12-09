import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { knexSnakeCaseMappers } from 'objection';
import {
  Circuit,
  Constructor,
  ConstructorResult,
  ConstructorStanding,
  Driver,
  DriverStanding,
  LapTime,
  PitStop,
  Qualifying,
  Race,
  RaceResult,
  Season,
  Status
} from './models';
import { BaseModel } from './models/base.model';

@Module({
  imports: [
    ObjectionModule.register({
      Model: BaseModel,
      config: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        ...knexSnakeCaseMappers
      }
    }),

    ObjectionModule.forFeature([
      Circuit,
      Constructor,
      ConstructorResult,
      ConstructorStanding,
      Driver,
      DriverStanding,
      LapTime,
      PitStop,
      Qualifying,
      RaceResult,
      Race,
      Season,
      Status
    ])
  ],
  exports: [ObjectionModule]
})
export class DataModule {}
