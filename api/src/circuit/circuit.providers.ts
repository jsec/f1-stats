import { Circuit } from './circuit.model';

export const circuitProviders = [
  {
    provide: 'CIRCUITS_REPOSITORY',
    useValue: Circuit,
  },
];
