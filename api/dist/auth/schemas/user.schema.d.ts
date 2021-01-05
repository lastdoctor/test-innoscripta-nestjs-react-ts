import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    email: string;
    password: string;
    userName: string;
    salt: string;
    validatePassword: Function;
}
export declare const UserSchema: import("mongoose").Schema<any, import("mongoose").Model<any>>;
