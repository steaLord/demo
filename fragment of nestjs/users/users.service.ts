import { UpdateUserDto } from './dto/update-user.dto';
import { CreateManagerDto } from './dto/create-manager.dto';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserByPhone(phone: string): Promise<User> {
    return this.usersRepository.findOne({ phone });
  }
  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }
  async createManager({
    placeName,
    phone,
    password,
    role,
  }: CreateManagerDto): Promise<User> {
    return this.usersRepository.create({
      placeName,
      phone,
      password,
      role,
    });
  }
  async updateUser(phone: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ phone }, userUpdates);
  }
}
