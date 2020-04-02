import * as databaseConfig from '../../config/database.json';

import { Circuit } from '../circuit/circuit.model';
import { Constructor } from '../constructor/constructor.model';
import { ConstructorResult } from '../constructor/constructor-result.model';
import { ConstructorStanding } from '../constructor/constructor-standing.model';
import { Dialect } from 'sequelize/types';
import { Driver } from '../driver/driver.model';
import { DriverStanding } from '../driver/driver-standing.model';
import { LapTime } from '../timing/lap-time.model';
import { PitStop } from '../timing/pit-stop.model';
import { Qualification } from '../timing/qualification.model';
import { Race } from '../race/race.model';
import { RaceResult } from '../race/race-result.model';
import { Season } from '../season/season.model';
import { Sequelize } from 'sequelize-typescript';
import { Status } from '../status/status.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const config = databaseConfig.development;

      const sequelize = new Sequelize({
        username: config.username,
        password: config.password,
        database: config.database,
        host: config.host,
        dialect: config.dialect as Dialect,
      });

      // TODO: figure out a way to glob these
      // (nestjs compiles these and puts them in the dist folder before the sequelize instance is created)
      sequelize.addModels([
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
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
