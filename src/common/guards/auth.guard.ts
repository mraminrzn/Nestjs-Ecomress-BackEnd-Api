import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Role } from 'src/typeOrm/Schemas/User.entity';
import { UseGuards } from '@nestjs/common';

export function UseAuthGaurd(Role: Role) {
  return UseGuards(new AuthGuard(Role));
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly Role: Role) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      if (this.Role === request.user.Role) {
        return true;
      } else {
        throw new UnauthorizedException('invalid Role');
      }
    } else {
      throw new UnauthorizedException('first login');
    }
  }
}
