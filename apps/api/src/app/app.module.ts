import { Module } from '@nestjs/common';
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
export class AppModule {}
