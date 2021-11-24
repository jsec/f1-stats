import { Module } from '@nestjs/common';
/* import { knex } from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
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
} from './models'; */

/* const models = [
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
]; */

/* const modelProviders = models.map(model => {
  return {
    provide: model.name,
    useValue: model
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const conn = knex({
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers()
      });

      Model.knex(conn);
      return conn;
    }
  }
]; */

@Module({
  controllers: [],
  providers: [],
  exports: []
})
export class DataModule {}
