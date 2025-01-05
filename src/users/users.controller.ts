import { Body, Controller, Post , Get, Param, Query ,Delete,Patch} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { parse } from 'path';

@Controller('auth')
export class UsersController {

  constructor(private userService:UsersService){}

  @Post('/signUp')
  createUser(@Body() body:CreateUserDto){
    this.userService.create(body.email , body.password);
  }

  @Get('/:id')
  findUser(@Param('id') id:string){
    return this.userService.findOne(parseInt(id))
  }

  @Get()
  findAllUsers(@Query('email') email:string){
    return this.userService.find(email)
  }

  @Patch('/:id')
  updateUser(@Body() body:UpdateUserDto , @Param('id') id:string){
    return this.userService.update(parseInt(id) , body)
  }

  @Delete('/:id')
  removeUser(@Param('id') id:string){
    return this.userService.remove(parseInt(id))
  }


}
