import { User } from "src/schemas/user.schema";

export class JWT_Payload {
    email: string;
}

export class JWT_Info {
    token: string;
    user_info: User
}