import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadService } from './upload.service';
import { ImageDto } from './dtos/Image.dto';
import { UseAuthGaurd } from 'src/common/guards/auth.guard';
import { Role } from 'src/typeOrm/Schemas/User.entity';

@Controller('/admin/upload')
@ApiTags('admin/upload images')
export class UploadController {
  constructor(private readonly UploadService: UploadService) {}
  @UseAuthGaurd(Role.ADMIN)
  @UseInterceptors(FileInterceptor('image'))
  @Post('single-image')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1000 * 1000 * 5,
            message: 'the file must be lesser the 5mb',
          }),
          new FileTypeValidator({
            fileType: RegExp(/^image\/(png|jpeg|gif|bmp|webp)$/),
          }),
        ],
      }),
    )
    image: Express.Multer.File,
    @Query() imageOption: ImageDto,
  ) {
    return await this.UploadService.uploadSingleImage(image, imageOption);
  }

  @UseInterceptors(FilesInterceptor('images'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        images: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @Post('upload-multiple-files')
  async uploadImages(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1000 * 1000 * 5,
            message: 'the file must be lesser the 5mb',
          }),
          new FileTypeValidator({
            fileType: RegExp(/^image\/(png|jpeg|gif|bmp|webp)$/),
          }),
        ],
      }),
    )
    image: Express.Multer.File[],
    @Query() imageOption: ImageDto,
  ) {
    return await this.UploadService.uploadMultipleImage(image, imageOption);
  }


  @Delete()
  async deleteImages(@Query('image') image: string){
    return await this.UploadService.deleteImage(image)
  }
}
