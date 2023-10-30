export class CreateUserDTO {
    name: string;
    email?: string;
    phone: string;
    class?: string;
    birth?: Date;
    point: number;
}

export class UpdateUserDTO {
    name: string;
    email?: string;
    phone: string;
    class?: string;
    birth?: Date;
    point: number;
}

export class DeleteUserDTO {
    id: string;
}