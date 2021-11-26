import { Module } from '@nestjs/common';
import { SeasonModule } from '../season/season.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SeasonModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
