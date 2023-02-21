import { Test, TestingModule } from '@nestjs/testing';
import { ConduitService } from './conduit.service';

describe('ConduitService', () => {
  let service: ConduitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConduitService],
    }).compile();

    service = module.get<ConduitService>(ConduitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
