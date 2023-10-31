export class CreateUserDTO {
    name: string;
    email?: string;
    phone: string;
    class?: string;
    birth?: Date;
    point: number;
    enabled?: boolean;
}

export class UpdateUserDTO {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    class?: string;
    birth?: Date;
    point?: number;
    enabled?: boolean;
}

export class DeleteUserDTO {
    id: string;
}

export class UserLoginDTO {
    username: string;
    password: string;
}