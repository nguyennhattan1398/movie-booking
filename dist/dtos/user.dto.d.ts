export declare class CreateUserDTO {
    name: string;
    email?: string;
    phone: string;
    class?: string;
    birth?: Date;
    point: number;
}
export declare class UpdateUserDTO {
    name: string;
    email?: string;
    phone: string;
    class?: string;
    birth?: Date;
    point: number;
}
export declare class DeleteUserDTO {
    id: string;
}
export declare class UserLoginDTO {
    username: string;
    password: string;
}
