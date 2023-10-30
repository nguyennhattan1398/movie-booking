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
exports.BookingSchema = exports.Booking = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Booking = class Booking {
};
exports.Booking = Booking;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Booking.prototype, "booking_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], Booking.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ["Ordering", "Waiting", "Error", "Success"], default: "Ordering" }),
    __metadata("design:type", String)
], Booking.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Booking.prototype, "seat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Booking.prototype, "payment_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Booking.prototype, "total_discount", void 0);
exports.Booking = Booking = __decorate([
    (0, mongoose_1.Schema)()
], Booking);
exports.BookingSchema = mongoose_1.SchemaFactory.createForClass(Booking);
//# sourceMappingURL=booking.schema.js.map