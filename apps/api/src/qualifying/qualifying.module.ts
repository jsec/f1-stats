import { DataModule } from '@f1-stats/data';
import { Module } from '@nestjs/common';
import { QualifyingController } from './qualifying.controller';
import { QualifyingService } from './qualifying.service';

@Module({
  imports: [DataModule],
  controllers: [QualifyingController],
  providers: [QualifyingService]
})
export class QualifyingModule {}
