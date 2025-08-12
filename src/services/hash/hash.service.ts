import { Injectable } from '@nestjs/common';
import { scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class HashService {
  async generateHashPass(password: string) {
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 64)) as Buffer;
    const resultHashed = hash.toString('hex') + '.' + salt;
    return resultHashed;
  }

  async compareHashPass(password: string, hashedPassword: string) {
    const [hash, salt] = hashedPassword.split('.');
    const derivedHash = (await scrypt(password, salt, 64)) as Buffer;
    return derivedHash.toString('hex') === hash;
  }
}
