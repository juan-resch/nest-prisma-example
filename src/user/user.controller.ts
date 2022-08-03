import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() userData: { email: string; name?: string },
  ): Promise<UserModel> {
    try {
      const user = this.userService.createUser(userData);

      return user;
    } catch (error) {
      console.log('oi');

      return error.message;
    }
  }
}
