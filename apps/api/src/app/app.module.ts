import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../common/filters/http-exception.filter';
import { LoggingMiddleware } from '../common/middlewares/logging.middleware';
import { DriverModule } from '../driver/driver.module';
import { SeasonModule } from '../season/season.module';

@Module({
  imports: [DriverModule, SeasonModule],
  controllers: [],
  providers: [
    Logger,
    {
      provide: APP_FILTER,
      useValue: AllExceptionsFilter
    }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
