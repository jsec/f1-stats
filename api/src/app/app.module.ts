import { MiddlewareConsumer, Module } from '@nestjs/common';

import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../filters/http-exception.filter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CircuitModule } from '../circuit/circuit.module';
import { ConstructorModule } from '../constructor/constructor.module';
import { DatabaseModule } from '../database/database.module';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { TimingModule } from 'src/timing/timing.module';

@Module({
  imports: [DatabaseModule, CircuitModule, ConstructorModule, TimingModule],
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
    MorganMiddleware.configure('dev');
    consumer.apply(MorganMiddleware).forRoutes('/');
  }
}
