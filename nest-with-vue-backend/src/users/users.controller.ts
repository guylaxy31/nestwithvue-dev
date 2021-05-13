import { Body,Controller, Get,Param,Patch,Post, } from '@nestjs/common';
import {User} from './schemas/user.schema';
import {UsersService} from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController{
    constructor(private readonly UsersService:UsersService){}

    @Get()
    async getUser():Promise<User[]>{
        return this.UsersService.findAll(); 
    }

    @Get(':_id')
    async getUserById(@Param('_id') _id:string):Promise<User>{
        return this.UsersService.findUserById({_id})
    }

    @Post()
    async createUser(@Body() createUserDto:CreateUserDto):Promise<User>{
        return this.UsersService.create(createUserDto.name,createUserDto.age)
    }
     
}