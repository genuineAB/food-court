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
exports.Brand = void 0;
const nestjs_objection_1 = require("nestjs-objection");
let Brand = class Brand extends nestjs_objection_1.Model {
};
__decorate([
    (0, nestjs_objection_1.Column)({ type: nestjs_objection_1.columnTypes.increments }),
    __metadata("design:type", Number)
], Brand.prototype, "id", void 0);
__decorate([
    (0, nestjs_objection_1.Column)({ type: nestjs_objection_1.columnTypes.string }),
    __metadata("design:type", String)
], Brand.prototype, "brand_name", void 0);
Brand = __decorate([
    (0, nestjs_objection_1.Table)({ tableName: 'brands' })
], Brand);
exports.Brand = Brand;
//# sourceMappingURL=brand.models.js.map