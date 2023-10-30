"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListMySqlModule = void 0;
const todo_service_1 = require("./todo.service");
const todo_controller_1 = require("./todo.controller");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entities_1 = require("./todo.entities");
let TodoListMySqlModule = class TodoListMySqlModule {
};
exports.TodoListMySqlModule = TodoListMySqlModule;
exports.TodoListMySqlModule = TodoListMySqlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([todo_entities_1.TodoEntity])
        ],
        controllers: [
            todo_controller_1.TodoListController
        ],
        providers: [
            todo_service_1.TodoListService
        ],
    })
], TodoListMySqlModule);
//# sourceMappingURL=todo.module.js.map