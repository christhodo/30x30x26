import { Module } from '@nestjs/common';
import { KickersService } from './kickers.service';
import { KickersController } from './kickers.controller';

@Module({
  controllers: [KickersController],
  providers: [KickersService]
})
export class KickersModule {}
