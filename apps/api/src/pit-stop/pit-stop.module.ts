import { DataModule } from '@f1-stats/data';
import { Module } from '@nestjs/common';
import { PitStopController } from './pit-stop.controller';
import { PitStopService } from './pit-stop.service';

@Module({
  imports: [DataModule],
  controllers: [PitStopController],
  providers: [PitStopService]
})
export class PitStopModule {}
