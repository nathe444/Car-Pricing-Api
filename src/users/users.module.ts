import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])], // to make a user repo
  controllers: [UsersController],
  providers: [UsersService,AuthService]
})
export class UsersModule {}
