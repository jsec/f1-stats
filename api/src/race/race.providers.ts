import { Race } from './race.model';
import { RaceResult } from './race-result.model';

export const raceProviders = [
  {
    provide: 'RACE_REPOSITORY',
    useValue: Race,
  },
  {
    provide: 'RACE_RESULTS_REPOSITORY',
    useValue: RaceResult,
  },
];
