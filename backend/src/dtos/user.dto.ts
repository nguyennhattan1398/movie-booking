export class CreateUserDTO {
    name: string;
    email: string;
    phone?: string;
    class?: string;
    birth?: Date;
    enabled?: boolean;
    avt: string;
}

export class UpdateUserDTO {
    _id: string;
    name?: string;
    email?: string;
    phone?: string;
    class?: string;
    birth?: Date;
    point?: number;
    enabled?: boolean;
}

export class DeleteUserDTO {
    _id: string;
}

export class BlockUserDTO {
    _id: string;
}
export class UserLoginDTO {
    username: string;
    password: string;
}