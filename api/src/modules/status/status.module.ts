import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

@Module({
  controllers: [StatusController],
  providers: [ StatusService, PrismaService ]
})
export class StatusModule {}
