// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/services/user/user.module';
import { JsonwebtokenModule } from 'src/services/jsonwebtoken/jsonwebtoken.module';
import { MyMailerModule } from 'src/services/mailer/mailer.module';
import { HashModule } from 'src/services/hash/hash.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 5,
        },
      ],
      errorMessage: 'too many request from you try later',
    }),
    UserModule,
    JsonwebtokenModule,
    MyMailerModule,
    HashModule,
  ],
  // APP_GUARD is removed from here
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
