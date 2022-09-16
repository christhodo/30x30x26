import { Test, TestingModule } from '@nestjs/testing';
import { KickersService } from './kickers.service';

describe('KickersService', () => {
  let service: KickersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KickersService],
    }).compile();

    service = module.get<KickersService>(KickersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
