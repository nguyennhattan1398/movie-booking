import { Document } from 'mongoose';
export interface UserInterface extends Document {
    readonly user_id: string;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly class: string;
    readonly birth: string;
    readonly point: string;
    readonly username: string;
    readonly password: string;
}
