import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from 'src/typeOrm/Schemas/User.entity';

export class UserDto {
  @ApiProperty({
    default: 'mraz123c@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    default: 'mamad138412345',
  })
  @IsString()
  password: string;

  @ApiProperty({
    default: 'texas',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    default: 'amin',
  })
  @IsString()
  firstName: string;
}

export class UpdateUserDto extends PartialType(UserDto) {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsBoolean()
  Verified?: boolean;

  @IsOptional()
  @IsEnum(Role)
  Role?: Role;
}
