import { Model } from 'mongoose';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { UserDocument } from '../schemas/user.schema';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<JwtPayload>;
    validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<JwtPayload>;
}
