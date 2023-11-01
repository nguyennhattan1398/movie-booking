import { User } from 'src/schemas/user.schema';
export interface UserInterface {
    readonly _id: string;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly class: string;
    readonly birth: string;
    readonly point: string;
    readonly username: string;
    readonly password: string;
}

export interface PayloadJWT {
    token: string;
    user_info: User
}