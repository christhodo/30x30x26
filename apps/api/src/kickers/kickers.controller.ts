import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KickersService } from './kickers.service';
import { CreateKickerDto } from './dto/create-kicker.dto';
import { UpdateKickerDto } from './dto/update-kicker.dto';

@Controller('kickers')
export class KickersController {
  constructor(private readonly kickersService: KickersService) {}

  @Post()
  create(@Body() createKickerDto: CreateKickerDto) {
    return this.kickersService.create(createKickerDto);
  }

  @Get()
  findAll() {
    return this.kickersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kickersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKickerDto: UpdateKickerDto) {
    return this.kickersService.update(+id, updateKickerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kickersService.remove(+id);
  }
}
