import { Inject, Injectable } from '@nestjs/common';

import { Status } from './status.model';

@Injectable()
export class StatusService {
  constructor(
    @Inject('STATUS_REPOSITORY') private statusRepository: typeof Status,
  ) {}

  public async findAll(): Promise<Status[]> {
    return this.statusRepository.findAll();
  }
}
