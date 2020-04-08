import { Season } from './season.model';

export const seasonProviders = [
  {
    provide: 'SEASONS_REPOSITORY',
    useValue: Season,
  },
];
