import { Todo } from './todo.schema';
import { Model } from 'mongoose';
import { ITodo } from './todo.interface';
export declare class TodoListService {
    private todoModel;
    constructor(todoModel: Model<ITodo>);
    findAll(): Promise<Todo[]>;
    addTodo(data: Todo): Promise<boolean>;
    deleteTodo(data: any): Promise<boolean>;
}
