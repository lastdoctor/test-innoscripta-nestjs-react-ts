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
exports.PizzasService = void 0;
const common_1 = require("@nestjs/common");
const pizzas_schema_1 = require("./schemas/pizzas.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PizzasService = class PizzasService {
    constructor(pizzaModel) {
        this.pizzaModel = pizzaModel;
    }
    async getPizzas() {
        return await this.pizzaModel.find({});
    }
};
PizzasService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(pizzas_schema_1.Pizza.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PizzasService);
exports.PizzasService = PizzasService;
//# sourceMappingURL=pizzas.service.js.map