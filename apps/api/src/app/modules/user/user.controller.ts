import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor() { }
  @Get()
  getData() {
    return { message: 'Hello User' };
  }
}
