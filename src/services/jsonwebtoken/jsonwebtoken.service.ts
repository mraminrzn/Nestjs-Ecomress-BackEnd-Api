import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {
  JwtService,
  JwtSignOptions,
  TokenExpiredError,
  JsonWebTokenError,
} from '@nestjs/jwt';

@Injectable()
export class JsonwebtokenService {
  constructor(private readonly jwtService: JwtService) {}
  newToken(data: object, option?: JwtSignOptions) {
    const jwt = this.jwtService.sign(data, option);
    return jwt;
  }

  async verifyToken(token: string) {
    try {
      const verifyToken = this.jwtService.verify(token);

      return verifyToken;
    } catch (error) {
      const decodedToken = this.jwtService.decode(token);
      console.log(decodedToken);

      if (error.name === 'TokenExpiredError') {
        throw new ForbiddenException('token expired');
      } else if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('token invalid');
      } else {
        console.error('An unexpected error occurred.');
      }
    }
  }
}
