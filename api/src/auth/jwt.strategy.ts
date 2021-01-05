import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User, UserDocument } from './schemas/user.schema';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Model } from 'mongoose';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'enigma',
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { userId, email } = payload;
    const user = await this.userModel.findOne({ userId });
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
