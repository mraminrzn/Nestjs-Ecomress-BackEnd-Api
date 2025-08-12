import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BrandAndCategoryDto {
  @ApiProperty({ description: 'The title of the brand' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'The image URL of the brand' })
  @IsString()
  image: string;
}
