import { Test, TestingModule } from '@nestjs/testing';
import { TelelgramService } from './telelgram.service';

describe('TelelgramService', () => {
  let service: TelelgramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelelgramService],
    }).compile();

    service = module.get<TelelgramService>(TelelgramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
