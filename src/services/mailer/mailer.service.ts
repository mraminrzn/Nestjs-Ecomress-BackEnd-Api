import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { generateHtmlVerify } from './emailHtmls/verify.html';

@Injectable()
export class MaielrService {
  constructor(private readonly mailService: MailerService) {}

  async sendVerifyEmail(token: string) {
    try {
      const sendMessage = await this.mailService.sendMail({
        from: `info@tilix.ir`,
        to: 'mraz12673@gmail.com',
        subject: `Verify Email Adress`,
        html: generateHtmlVerify(token),
      });
      console.log(sendMessage);
      if (sendMessage.rejected.length) {
        throw new InternalServerErrorException('failed to send email');
      } else {
        return { success: true, message: 'Email Sended ' };
      }
    } catch (error) {
      throw new InternalServerErrorException('failed to send email');
    }
  }
}
