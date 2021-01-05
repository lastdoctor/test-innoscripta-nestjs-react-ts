import { Strategy } from 'passport-jwt';
import { User, UserDocument } from './schemas/user.schema';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Model } from 'mongoose';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
