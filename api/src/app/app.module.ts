import * as dbConfig from '../../config/config.json';

import {MiddlewareConsumer, Module} from '@nestjs/common';

import {APP_FILTER} from '@nestjs/core';
import {AllExceptionsFilter} from '../filters/http-exception.filter';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {Circuit} from '../circuit/circuit.model';
import {CircuitModule} from '../circuit/circuit.module';
import {Constructor} from '../constructor/constructor.model';
import {ConstructorModule} from '../constructor/constructor.module';
import {ConstructorResult} from '../constructor/constructor-result.model';
import {ConstructorStanding} from '../constructor/constructor-standing.model';
import {Dialect} from 'sequelize/types';
import {Driver} from '../driver/driver.model';
import {DriverModule} from '../driver/driver.module';
import {DriverStanding} from '../driver/driver-standing.model';
import {LapTime} from '../timing/lap-time.model';
import {PitStop} from '../timing/pit-stop.model';
import {Qualification} from '../timing/qualification.model';
import {Race} from '../race/race.model';
import {RaceModule} from '../race/race.module';
import {RaceResult} from '../race/race-result.model';
import {Season} from '../season/season.model';
import {SeasonModule} from '../season/season.module';
import {SequelizeModule} from '@nestjs/sequelize';
import {Status} from '../status/status.model';
import {StatusModule} from '../status/status.module';
import {TimingModule} from '../timing/timing.module';
import {LoggerMiddleware} from '../middlewares/logger.middleware';

@Module({
  imports: [
    CircuitModule,
    ConstructorModule,
    DriverModule,
    RaceModule,
    SeasonModule,
    SequelizeModule.forRoot({
      username: dbConfig.development.username || undefined,
      password: dbConfig.development.password || undefined,
      database: dbConfig.development.database,
      host: dbConfig.development.host,
      dialect: dbConfig.development.dialect as Dialect,
      models: [
        Circuit,
        Constructor,
        ConstructorResult,
        ConstructorStanding,
        Driver,
        DriverStanding,
        LapTime,
        PitStop,
        Qualification,
        Race,
        RaceResult,
        Season,
        Status,
      ],
    }),
    StatusModule,
    TimingModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
