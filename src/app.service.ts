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
    console.log("🚀 ~ file: app.service.ts:18 ~ AppService ~ googleLogin ~ req.user:", req.user)

    const payload = { username: req.user.email, sub: req.user.firstName };
    const jwt = this.jwtService.sign(payload);
    console.log("🚀 ~ file: app.service.ts:19 ~ AppService ~ googleLogin ~ jwt:", jwt)
    return {
      message: 'User data from google',
      // data: ,
      user: req.user,
    };
  }
}
