import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({ type: KnowledgeCreateDto })
  create(@Body() body: KnowledgeCreateDto) {
    return this.userService.create(body);
  }

  @Put(':id')
  @ApiBody({ type: KnowledgeUpdateDto })
  update(@Param('id') id: number, @Body() body: KnowledgeUpdateDto) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
