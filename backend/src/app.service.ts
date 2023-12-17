import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) { }
  getHello(): string {
    return 'Hello World!';
  }

  googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google';
    }

    const payload = { username: req.user.email, sub: req.user.firstName };
    const jwt = this.jwtService.sign(payload);
    return {
      message: 'User data from google',
      // data: ,
      user: req.user,
    };
  }
}
