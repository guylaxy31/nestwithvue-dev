import { Model , FilterQuery} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import {  v4 as uuidv4} from 'uuid'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(name:string,age:number): Promise<User> {
    const createdUser = new this.userModel({
        userId:uuidv4(),
        name,
        age
    });
    return createdUser.save();
  }

  async findUserById(userFilterQuery:FilterQuery<User>) : Promise<User> {
    return this.userModel.findOne(userFilterQuery)
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
