import { TodoEntity } from './todo.entities';
import { Repository } from 'typeorm';
export declare class TodoListService {
    private todoRepository;
    constructor(todoRepository: Repository<TodoEntity>);
    findAll(): Promise<TodoEntity[]>;
    addTodo(data: TodoEntity): Promise<boolean>;
    deleteTodo(data: any): Promise<boolean>;
}
