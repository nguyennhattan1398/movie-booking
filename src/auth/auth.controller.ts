// auth.controller.ts
import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GoogleOAuthGuard } from './google-oauth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('google')
    @UseGuards(GoogleOAuthGuard)
    googleLogin() {
        // return 1;
    }

    @Get('google/callback')
    @UseGuards(GoogleOAuthGuard)
    googleLoginCallback(@Req() req, @Res() res) {
        console.log("🚀 ~ file: auth.controller.ts:20 ~ AuthController ~ googleLoginCallback ~ req:", req.user)
        // handles the Google OAuth2 callback
        this.authService.googleLogin(req.user)
        // if (jwt) res.redirect('http://localhost:1005/login/success/' + jwt);
        // else res.redirect('http://localhost:1005/login/failure');
    }
}