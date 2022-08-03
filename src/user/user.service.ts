import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    try {
      return this.prisma.user.create({ data });
    } catch (error) {
      console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa');

      return error;
    }
  }

  async updateUser(params: {
    data: Prisma.UserUpdateInput;
    where: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    return this.prisma.user.update(params);
  }

  async findUser(params: {
    where: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    return this.prisma.user.findFirst(params);
  }

  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async deleteUser(params: {
    where: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    return this.prisma.user.delete(params);
  }
}
