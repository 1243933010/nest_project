import { Test, TestingModule } from '@nestjs/testing';
import { ConduitController } from './conduit.controller';
import { ConduitService } from './conduit.service';

describe('ConduitController', () => {
  let controller: ConduitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConduitController],
      providers: [ConduitService],
    }).compile();

    controller = module.get<ConduitController>(ConduitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
