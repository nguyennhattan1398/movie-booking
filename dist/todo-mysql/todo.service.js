"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListService = void 0;
const common_1 = require("@nestjs/common");
const todo_entities_1 = require("./todo.entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TodoListService = class TodoListService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async findAll() {
        return await this.todoRepository.find();
    }
    async addTodo(data) {
        return await this.todoRepository.insert(data) ? true : false;
    }
    async deleteTodo(data) {
        return await this.todoRepository.delete({ id: data.id }) ? true : false;
    }
};
exports.TodoListService = TodoListService;
exports.TodoListService = TodoListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(todo_entities_1.TodoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TodoListService);
//# sourceMappingURL=todo.service.js.map