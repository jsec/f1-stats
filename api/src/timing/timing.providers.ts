import { LapTime } from './lap-time.model';
import { PitStop } from './pit-stop.model';
import { Qualification } from './qualification.model';

export const timingProviders = [
  {
    provide: 'LAP_TIMES_REPOSITORY',
    useValue: LapTime,
  },
  {
    provide: 'QUALIFICATION_REPOSITORY',
    useValue: Qualification,
  },
  {
    provide: 'PIT_STOP_REPOSITORY',
    useValue: PitStop,
  },
];
