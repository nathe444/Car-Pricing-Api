import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes , scrypt as _scrypt } from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService{
  constructor(private userService:UsersService){}

  async signUp(email:string , password:string){
    const user = await this.userService.find(email);
    if(user){
      throw new BadRequestException('email in use')
    }
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password , salt , 32)) as Buffer;

    const result = salt + '.' + hash.toString('hex');
   
  }

}