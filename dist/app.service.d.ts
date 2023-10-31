import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private jwtService;
    constructor(jwtService: JwtService);
    getHello(): string;
    googleLogin(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
