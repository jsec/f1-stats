import { Module } from '@nestjs/common';

import { PrismaService } from '../../core';
import { StatusResolver } from './status.resolver';
import { StatusService } from './status.service';

@Module({
  providers: [ StatusResolver, StatusService, PrismaService ]
})
export class StatusModule {}
