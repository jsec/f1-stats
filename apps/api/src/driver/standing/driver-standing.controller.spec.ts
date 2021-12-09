import { Test, TestingModule } from '@nestjs/testing';
import { DriverStandingController } from './driver-standing.controller';
import { DriverStandingService } from './driver-standing.service';

describe('SeasonController', () => {
  let controller: DriverStandingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverStandingController],
      providers: [DriverStandingService]
    }).compile();

    controller = module.get<DriverStandingController>(DriverStandingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
