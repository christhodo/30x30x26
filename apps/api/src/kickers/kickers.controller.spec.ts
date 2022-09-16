import { Test, TestingModule } from '@nestjs/testing';
import { KickersController } from './kickers.controller';
import { KickersService } from './kickers.service';

describe('KickersController', () => {
  let controller: KickersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KickersController],
      providers: [KickersService],
    }).compile();

    controller = module.get<KickersController>(KickersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
