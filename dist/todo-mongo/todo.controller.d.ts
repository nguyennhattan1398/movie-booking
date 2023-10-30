import { TodoListService } from './todo.service';
import { Todo } from './todo.schema';
export declare class TodoListController {
    private readonly todoListService;
    constructor(todoListService: TodoListService);
    getAllTodoList(): Promise<Todo[]>;
    addTodo(data: Todo): Promise<boolean>;
    deleteTodo(data: any): Promise<boolean>;
}
