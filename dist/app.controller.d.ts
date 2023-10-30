import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    googleAuthRedirect(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
