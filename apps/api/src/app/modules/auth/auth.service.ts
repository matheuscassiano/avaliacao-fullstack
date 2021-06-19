import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as md5 from 'md5';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    pass: string
  ): Promise<{ id: number; name: string; email: string }> {
    const user = await this.usersService.findByEmail(email);
    if (
      user &&
      user.password === md5(pass) &&
      user.validatedAt !== '' &&
      user.validatedAt !== null
    ) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
