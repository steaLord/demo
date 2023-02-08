import { UpdateUserDto } from './dto/update-user.dto';
import { CreateManagerDto } from './dto/create-manager.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CustomValidationPipe } from 'src/pipes/validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':phone')
  async getUserByPhone(@Param('phone') phone: string): Promise<User> {
    return this.usersService.getUserByPhone(phone);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  @UsePipes(CustomValidationPipe)
  async createUser(@Body() createUserDto: CreateManagerDto): Promise<User> {
    return this.usersService.createManager(createUserDto);
  }

  // @Patch(':phone/:password')
  // async updateUser(
  //   @Param('phone') phone: string,
  //   @Param('password') password: string,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<User> {
  //   const check = await this.getUserByPhone(phone);
  //   if (password === check.password) {
  //     return this.usersService.updateUser(phone, updateUserDto);
  //   } else {
  //     return new User();
  //   }
  // }
}
