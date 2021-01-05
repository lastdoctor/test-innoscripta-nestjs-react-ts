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
exports.UserRepository = void 0;
const bcrypt = require("bcryptjs");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
let UserRepository = class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signUp(authCredentialsDto) {
        try {
            const { email, password, userName } = authCredentialsDto;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = {
                email,
                password: hashedPassword,
                userName,
                salt,
            };
            const createdUser = await this.userModel.create(user);
            const payload = {
                email,
                userId: createdUser.id,
            };
            return payload;
        }
        catch (e) {
            throw new common_1.ConflictException('User already exists');
        }
    }
    async validateUserPassword(authCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const user = await this.userModel.findOne({ email });
        if (!user)
            throw new common_1.NotFoundException();
        const isSame = await user.validatePassword(password);
        if (!isSame)
            throw new common_1.BadRequestException('Password id not validate');
        const payload = {
            email,
            userId: user.id,
        };
        return payload;
    }
};
UserRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map