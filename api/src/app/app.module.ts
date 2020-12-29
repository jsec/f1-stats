import { MiddlewareConsumer, Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "../filters/http-exception.filter";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CircuitModule } from "../circuit/circuit.module";
import { ConstructorModule } from "../constructor/constructor.module";
import { DriverModule } from "../driver/driver.module";
import { RaceModule } from "../race/race.module";
import { SeasonModule } from "../season/season.module";
import { StatusModule } from "../status/status.module";
import { TimingModule } from "../timing/timing.module";
import { LoggerMiddleware } from "../middlewares/logger.middleware";

@Module({
  imports: [
    CircuitModule,
    ConstructorModule,
    DriverModule,
    RaceModule,
    SeasonModule,
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
    consumer.apply(LoggerMiddleware).forRoutes("/");
  }
}
