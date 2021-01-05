import * as bcrypt from 'bcryptjs';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { User, UserDocument } from '../schemas/user.schema';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<JwtPayload> {
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
      const payload: JwtPayload = {
        email,
        userId: createdUser.id,
      };
      return payload;
    } catch (e) {
      throw new ConflictException('User already exists');
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto
  ): Promise<JwtPayload> {
    const { email, password } = authCredentialsDto;
    const user = await this.userModel.findOne({ email });
    if (!user) throw new NotFoundException();
    const isSame = await user.validatePassword(password);
    if (!isSame) throw new BadRequestException('Password id not validate');
    const payload: JwtPayload = {
      email,
      userId: user.id,
    };
    return payload;
  }
}
