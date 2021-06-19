import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { KnowledgeCreateDto } from './dto/knowledge-create.dto';
import { KnowledgeUpdateDto } from './dto/knowledge-update.dto';
import { KnowledgeService } from './knowledge.service';

@Controller('knowledge')
export class KnowledgeController {
  constructor(private readonly userService: KnowledgeService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() body: KnowledgeCreateDto) {
    return this.userService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: KnowledgeUpdateDto) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
