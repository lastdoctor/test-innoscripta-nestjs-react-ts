import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async signUp(
    authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    const payload = await this.userRepository.signUp(authCredentialsDto);
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    const payload = await this.userRepository.validateUserPassword(
      authCredentialsDto
    );
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }
}
