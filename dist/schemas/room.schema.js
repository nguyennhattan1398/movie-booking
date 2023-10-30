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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSchema = exports.Room = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Room = class Room {
};
exports.Room = Room;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Room.prototype, "room_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: [50, 75, 100] }),
    __metadata("design:type", Number)
], Room.prototype, "seats", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Room.prototype, "room_name", void 0);
exports.Room = Room = __decorate([
    (0, mongoose_1.Schema)()
], Room);
exports.RoomSchema = mongoose_1.SchemaFactory.createForClass(Room);
//# sourceMappingURL=room.schema.js.map