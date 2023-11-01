import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOAuthGuard } from './google/google-oauth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('google')
    @UseGuards(GoogleOAuthGuard)
    googleLogin() {
    }

    @Get('google/callback')
    @UseGuards(GoogleOAuthGuard)
    async googleLoginCallback(@Req() req) {
        return await this.authService.googleLoginCallback(req)
    }
}