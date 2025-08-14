import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { User } from 'src/typeOrm/Schemas/User.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto, UserDto } from './dtos/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll() {
    return await this.userRepository.find({
      select: {
        password: false,
      },
    });
  }

  async findById(id: number, error: boolean = true) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user && error) throw new NotFoundException('User not found');
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });

    return user ;
  }


  async create(user: UserDto) {
    const existingUser = await this.findByEmail(user.email);
    if (existingUser && existingUser.Verified == true)
      throw new ConflictException('User already exists');
    else if (existingUser && existingUser.Verified == false)
      throw new ConflictException(
        'Email Verification sended for you Verify your account',
      );

    return await this.userRepository.save(user);
  }

  async delete(id: number) {
    const user = await this.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return await this.userRepository.remove(user);
  }

  async update(id: number, user: UpdateUserDto) {
    const existingUser = await this.findById(id);
    if (!existingUser) throw new NotFoundException('User not found');
    return await this.userRepository.save({ ...existingUser, ...user });
  }
}
