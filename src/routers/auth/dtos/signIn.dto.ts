import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    default: 'mraz123c@gmail.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    default: 'mamad138412345',
  })
  @IsString()
  password: string;
}
