import { Driver } from './driver.model';
import { DriverStanding } from './driver-standing.model';

export const driverProviders = [
  {
    provide: 'DRIVERS_REPOSITORY',
    useValue: Driver,
  },
  {
    provide: 'DRIVER_STANDINGS_REPOSITORY',
    useValue: DriverStanding,
  },
];
