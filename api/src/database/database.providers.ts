import { Circuit } from 'src/models/circuit.model';
import { Constructor } from '../models/constructor.model';
import { ConstructorResult } from '../models/constructor-result.model';
import { ConstructorStanding } from '../models/constructor-standing.model';
import { Driver } from '../models/driver.model';
import { DriverStanding } from '../models/driver-standing.model';
import { LapTime } from '../models/lap-time.model';
import { PitStop } from '../models/pit-stop.model';
import { Qualification } from '../models/qualification.model';
import { Race } from '../models/race.model';
import { RaceResult } from '../models/race-result.model';
import { Season } from '../models/season.model';
import { Sequelize } from 'sequelize-typescript';
import { Status } from '../models/status.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        username: null,
        password: null,
        database: 'f1statstest',
        host: '127.0.0.1',
        dialect: 'postgres',
      });

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
