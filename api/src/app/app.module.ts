import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AllExceptionsFilter, LoggerMiddleware } from '../core';
import { CircuitModule } from '../modules/circuit/circuit.module';
import { ConstructorModule } from '../modules/constructor/constructor.module';
import { DriverModule } from '../modules/driver/driver.module';
import { RaceModule } from '../modules/race/race.module';
import { SeasonModule } from '../modules/season/season.module';
import { StatusModule } from '../modules/status/status.module';
import { TimingModule } from '../modules/timing/timing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CircuitModule,
    ConstructorModule,
    DriverModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    RaceModule,
    SeasonModule,
    StatusModule,
    TimingModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
