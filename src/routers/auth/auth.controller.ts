import {
  Body,
  Controller,
  ExecutionContext,
  Get,
  Post,
  Query,
  Session,
  UseGuards,
} from '@nestjs/common';
import { UserDto } from 'src/services/user/dtos/user.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signIn.dto';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('auth')
@UseGuards(ThrottlerGuard)
@Throttle({ default: { limit: 5, ttl: 1000 * 60 * 2 } })
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('sign-up')
  signUp(@Body() user: UserDto) {
    return this.authService.signUp(user);
  }

  @Get('verifyEmail')
  verifyEmail(@Query('token') token: string) {
    return this.authService.VerifyEmail(token);
  }

  @Post('Login')
  async signIn(@Body() user: SignInDto, @Session() session: any) {
    return this.authService.signIn(session, user);
  }
}
