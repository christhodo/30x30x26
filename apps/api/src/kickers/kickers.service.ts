import { Injectable } from '@nestjs/common';
import { CreateKickerDto } from './dto/create-kicker.dto';
import { UpdateKickerDto } from './dto/update-kicker.dto';

@Injectable()
export class KickersService {
  create(createKickerDto: CreateKickerDto) {
    return 'This action adds a new kicker';
  }

  findAll() {
    return `This action returns all kickers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kicker`;
  }

  update(id: number, updateKickerDto: UpdateKickerDto) {
    return `This action updates a #${id} kicker`;
  }

  remove(id: number) {
    return `This action removes a #${id} kicker`;
  }
}
