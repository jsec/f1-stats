import { Constructor } from './constructor.model';
import { ConstructorResult } from './constructor-result.model';
import { ConstructorStanding } from './constructor-standing.model';

export const constructorProviders = [
  {
    provide: 'CONSTRUCTORS_REPOSITORY',
    useValue: Constructor,
  },
  {
    provide: 'CONSTRUCTOR_STANDINGS_REPOSITORY',
    useValue: ConstructorStanding,
  },
  {
    provide: 'CONSTRUCTOR_RESULTS_REPOSITORY',
    useValue: ConstructorResult,
  },
];
