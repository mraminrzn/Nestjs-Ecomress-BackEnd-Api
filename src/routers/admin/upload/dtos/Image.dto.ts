import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

enum ImageType {
  png = 'png',
  jpeg = 'jpeg',
  webp = 'webp',
}

export class ImageDto {
  @ApiProperty({
    default: 400,
    title: 'width',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  width?: number;

  @ApiProperty({
    default: 400,
    title: 'width',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  height?: number;

  @ApiProperty({
    default: ImageType.webp,
    title: 'imageType',
    type: 'string',
    enum: ImageType,
    enumName: 'ImageType',
    required: false,
  })
  @IsOptional()
  @IsEnum(ImageType)
  imageType?: ImageType;

  @ApiProperty({
    default: 'test',
    title: 'group',
    required: false,
  })
  @IsString()
  @IsOptional()
  group?: string;
}
