import { Status } from './status.model';

export const statusProviders = [
  {
    provide: 'STATUS_REPOSITORY',
    useValue: Status,
  },
];
