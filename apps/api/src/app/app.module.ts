import { HttpLoggerMiddleware } from '@nest-toolbox/http-logger-middleware';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../common/filters/http-exception.filter';
import { SeasonModule } from '../season/season.module';

@Module({
  imports: [SeasonModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useValue: AllExceptionsFilter
    }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(HttpLoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    });
  }
}
