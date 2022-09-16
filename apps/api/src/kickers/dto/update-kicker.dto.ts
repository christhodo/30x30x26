import { PartialType } from '@nestjs/mapped-types';
import { CreateKickerDto } from './create-kicker.dto';

export class UpdateKickerDto extends PartialType(CreateKickerDto) {}
