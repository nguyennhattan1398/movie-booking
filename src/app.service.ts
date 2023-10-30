import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google';
    }

    // req.redirect('https://www.google.com')

    return {
      message: 'User data from google',
      user: req.user,
    };
  }
}
