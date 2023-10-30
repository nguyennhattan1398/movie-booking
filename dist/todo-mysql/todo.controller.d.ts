import { TodoListService } from './todo.service';
import { TodoEntity } from './todo.entities';
export declare class TodoListController {
    private readonly todoListService;
    constructor(todoListService: TodoListService);
    getAllTodoList(): Promise<TodoEntity[]>;
    addTodo(data: TodoEntity): Promise<boolean>;
    deleteTodo(data: any): Promise<boolean>;
}
