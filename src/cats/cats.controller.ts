import { Controller, Delete, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { Cat } from './interface/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { // private 는 선언과 동시에 초기화가 가능하다.

  }
  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remoce(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
