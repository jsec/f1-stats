import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CircuitModule } from '../circuit/circuit.module';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { LoggingMiddleware } from '../common/middlewares/logging.middleware';
import { ConstructorModule } from '../constructor/constructor.module';
import { DriverModule } from '../driver/driver.module';
import { LapTimeModule } from '../lap-time/lap-time.module';
import { PitStopModule } from '../pit-stop/pit-stop.module';
import { QualifyingModule } from '../qualifying/qualifying.module';
import { RaceModule } from '../race/race.module';
import { SeasonModule } from '../season/season.module';

@Module({
  imports: [
    CircuitModule,
    ConstructorModule,
    DriverModule,
    LapTimeModule,
    PitStopModule,
    QualifyingModule,
    RaceModule,
    SeasonModule
  ],
  controllers: [],
  providers: [
    Logger,
    {
      provide: APP_FILTER,
      useValue: HttpExceptionFilter
    }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
