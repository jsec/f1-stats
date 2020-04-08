import { LapTime } from './lap-time.model';

export const timingProviders = [
  {
    provide: 'LAP_TIMES_REPOSITORY',
    useValue: LapTime,
  },
];
