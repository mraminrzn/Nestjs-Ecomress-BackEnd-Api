import { Module } from '@nestjs/common';
import { JsonwebtokenService } from './jsonwebtoken.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JSON_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JsonwebtokenService],
  exports: [JsonwebtokenService],
})
export class JsonwebtokenModule {}
