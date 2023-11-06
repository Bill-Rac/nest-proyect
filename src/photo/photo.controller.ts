import {
  Controller,
  Get,
  Post,
  Body,
  //  Patch,
  //  Param,
  // Delete,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './entities/photo.entity';
// import { CreatePhotoDto } from './dto/create-photo.dto';
// import { UpdatePhotoDto } from './dto/update-photo.dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  // @Post()
  // create(@Body() createPhotoDto: CreatePhotoDto) {
  //   return this.photoService.create(createPhotoDto);
  // }
  @Post()
  create(@Body() photo: Photo) {
    return this.photoService.create(photo);
  }

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.photoService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
  //   return this.photoService.update(+id, updatePhotoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.photoService.remove(+id);
  // }
}
