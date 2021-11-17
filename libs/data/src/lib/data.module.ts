import { Module } from '@nestjs/common';
import * as Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { Circuit } from './models/circuit.model';
import { ConstructorResult } from './models/constructor-result.model';
import { ConstructorStanding } from './models/constructor-standing.model';
import { Constructor } from './models/constructor.model';
import { DriverModel } from './models/driver.model';
import { DriverStanding } from './models/driver_standing.model';
import { LapTime } from './models/lap-time.model';
import { PitStop } from './models/pit-stop.model';
import { Qualifying } from './models/qualifying.model';
import { RaceResult } from './models/race-result.model';
import { RaceModel } from './models/race.model';
import { SeasonModel } from './models/season.model';
import { Status } from './models/status.model';

const models = [Circuit, Constructor, ConstructorResult, ConstructorStanding, DriverModel, DriverStanding, LapTime, PitStop, Qualifying, RaceModel, RaceResult, SeasonModel, Status];

const modelProviders = models.map(model => {
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
      const knex = Knex({
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers()
      });

      Model.knex(knex);
      return knex;
    }
  }
];

@Module({
  controllers: [],
  providers: [...providers],
  exports: [...providers]
})
export class DataModule { }
