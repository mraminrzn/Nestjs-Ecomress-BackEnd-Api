// src/auth/auth.service.ts
import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JsonwebtokenService } from 'src/services/jsonwebtoken/jsonwebtoken.service';
import { MaielrService } from 'src/services/mailer/mailer.service';
import { UserDto } from 'src/services/user/dtos/user.dto';
import { UserService } from 'src/services/user/user.service';
import { SignInDto } from './dtos/signIn.dto';
import { Request } from 'express';
import { HashService } from 'src/services/hash/hash.service';
import { VerifyEmailHtml } from 'src/common/responseHtmls/verify.html';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jsonwebtokenService: JsonwebtokenService,
    private readonly MailerService: MaielrService,
    private readonly HashService: HashService,
  ) {}

  async signUp(user: UserDto) {
    const userExcited = await this.userService.findByEmail(user.email, false);
    if (userExcited) throw new ConflictException('User already exists');
    const createdUser = await this.userService.create({
      ...user,
      password: await this.HashService.generateHashPass(user.password),
    });
    const token = this.jsonwebtokenService.newToken(
      { email: createdUser.email },
      { expiresIn: '1h' },
    );
    await this.MailerService.sendVerifyEmail(token);
    setTimeout(
      async () => {
        const userVerfyed = await this.userService.findByEmail(
          createdUser.email,
        );
        if (!userVerfyed?.Verified)
          await this.userService.delete(createdUser.id);
      },
      1000 * 60 * 60,
    );

    return { success: true, message: 'the user signed up successfully' };
  }

  async VerifyEmail(token: string) {
    const tokenData = await this.jsonwebtokenService.verifyToken(token);
    await this.userService.update(tokenData.email, { Verified: true });

    return VerifyEmailHtml;
  }

  async signIn(session: any, user: SignInDto) {
    const foundedUser = await this.userService.findByEmail(user.email);
    if (!foundedUser?.Verified)
      throw new ForbiddenException('Email not verified');
    if (
      !(await this.HashService.compareHashPass(
        user.password,
        foundedUser.password,
      ))
    )
      throw new ForbiddenException('Invalid credentials');
    session.userId = foundedUser.id;
    return { success: true, message: 'logged in successfully' };
  }
}
