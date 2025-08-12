// In mailer/mailer.module.ts
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MaielrService } from './mailer.service'; // Fix typo here, should be MailerService
import { ConfigModule, ConfigService } from '@nestjs/config';

export const NestMailerConfig = MailerModule.forRootAsync({
  useFactory: () => ({
    transport: {
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
  }),
});

@Module({
  imports: [NestMailerConfig],
  providers: [MaielrService],
  exports: [MaielrService],
})
export class MyMailerModule {}
