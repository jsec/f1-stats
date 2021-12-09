import { Test, TestingModule } from '@nestjs/testing';
import { DriverStandingService } from './driver-standing.service';

describe('SeasonService', () => {
  let service: DriverStandingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverStandingService]
    }).compile();

    service = module.get<DriverStandingService>(DriverStandingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
