import { Injectable } from '@nestjs/common';
import { ImageDto } from './dtos/Image.dto';
import sharp from 'sharp';
import { mkdirp } from 'mkdirp';

@Injectable()
export class UploadService {
  async uploadSingleImage(Image: Express.Multer.File, option: ImageDto) {
    const imageName = option.imageType
      ? Date.now().toString() +
        '-' +
        Image.originalname.split('.')[0] +
        `.${option.imageType}`
      : Date.now().toString() + '-' + Image.originalname;

    const destination = `files/${option.group ? option.group + '/' : 'noGruop/'}`;
    await mkdirp(destination);

    const FullImagePath = destination + imageName;

    const sharpInstance = sharp(Image.buffer);

    if (option.imageType)
      sharpInstance.toFormat(option.imageType as keyof sharp.FormatEnum);
    if (option.width || option.height)
      sharpInstance.resize(option.width ?? null, option.height ?? null, {
        fit: 'inside',
        withoutEnlargement: true,
      });

    await sharpInstance.toFile(FullImagePath);
    return { success: true, image: FullImagePath };
  }

  async uploadMultipleImage(Images: Express.Multer.File[], option: ImageDto) {
    const ImagesList: string[] = [];

    for (const imageFile of Images) {
      const { image } = await this.uploadSingleImage(imageFile, option);
      ImagesList.push(image);
    }

    return { success: true, images: ImagesList };
  }
}
